import { jsPDF } from 'jspdf';
import { PDF_SETTINGS, COLUMN_POSITIONS, COLUMN_WIDTHS } from '../../constants';
import { formatCurrency } from '../../formatters';
import { drawTableRow, type TableCell } from '../../components/table/TableRow';

export const drawCartTotals = (
  pdf: jsPDF,
  startY: number,
  totalOriginal: number,
  totalDiscounted: number
): number => {
  let y = startY + 6; // Reduced spacing before totals

  // Add separator line
  pdf.setLineWidth(0.5);
  pdf.line(
    COLUMN_POSITIONS.ORIGINAL_PRICE,
    y,
    COLUMN_POSITIONS.TOTAL + COLUMN_WIDTHS.TOTAL,
    y
  );
  y += 8; // Reduced spacing after separator

  // Draw totals
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.BOLD);
  pdf.setFontSize(PDF_SETTINGS.FONT.SIZES.BODY);

  const totalsRows = [
    {
      label: 'Original Total:',
      value: formatCurrency(totalOriginal)
    },
    {
      label: 'Discount (80%):',
      value: `-${formatCurrency(totalOriginal - totalDiscounted)}`
    },
    {
      label: 'Final Amount:',
      value: formatCurrency(totalDiscounted)
    }
  ];

  totalsRows.forEach((row, index) => {
    const cells: TableCell[] = [
      { 
        text: row.label, 
        x: COLUMN_POSITIONS.ORIGINAL_PRICE, 
        width: COLUMN_WIDTHS.ORIGINAL_PRICE + COLUMN_WIDTHS.DISCOUNTED_PRICE, 
        align: 'right' 
      },
      { 
        text: row.value, 
        x: COLUMN_POSITIONS.TOTAL, 
        width: COLUMN_WIDTHS.TOTAL, 
        align: 'right' 
      }
    ];

    y = drawTableRow(pdf, y, cells, false);
    if (index < totalsRows.length - 1) {
      y += 3; // Reduced spacing between total rows
    }
  });

  return y;
};