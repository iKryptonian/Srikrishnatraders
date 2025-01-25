import { jsPDF } from 'jspdf';
import type { CartItem } from '../../../../types/CartItem';
import { PDF_SETTINGS, COLUMN_POSITIONS, COLUMN_WIDTHS } from '../../constants';
import { formatCurrency } from '../../formatters';
import { drawTableHeader, type TableColumn } from '../../components/table/TableHeader';
import { drawTableRow, type TableCell } from '../../components/table/TableRow';

const CART_COLUMNS: TableColumn[] = [
  { text: 'S.No', x: COLUMN_POSITIONS.SERIAL, width: COLUMN_WIDTHS.SERIAL },
  { text: 'Product Name', x: COLUMN_POSITIONS.NAME, width: COLUMN_WIDTHS.NAME },
  { text: 'Qty', x: COLUMN_POSITIONS.QUANTITY, width: COLUMN_WIDTHS.QUANTITY },
  { text: 'Price', x: COLUMN_POSITIONS.ORIGINAL_PRICE, width: COLUMN_WIDTHS.ORIGINAL_PRICE },
  { text: 'Disc.Price', x: COLUMN_POSITIONS.DISCOUNTED_PRICE, width: COLUMN_WIDTHS.DISCOUNTED_PRICE },
  { text: 'Total', x: COLUMN_POSITIONS.TOTAL, width: COLUMN_WIDTHS.TOTAL }
];

export const drawCartTable = (
  pdf: jsPDF,
  cartItems: CartItem[],
  startY: number
): { endY: number; totalOriginal: number; totalDiscounted: number } => {
  let y = startY;
  let totalOriginalAmount = 0;
  let totalDiscountedAmount = 0;

  // Draw header
  y = drawTableHeader(pdf, y, CART_COLUMNS);
  y += 8;

  // Draw rows
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.NORMAL);
  pdf.setFontSize(PDF_SETTINGS.FONT.SIZES.BODY);

  cartItems.forEach((item, index) => {
    if (y > PDF_SETTINGS.PAGE.MAX_Y) {
      pdf.addPage();
      y = PDF_SETTINGS.PAGE.START_Y;
      y = drawTableHeader(pdf, y, CART_COLUMNS);
      y += 8;
    }

    const originalItemTotal = item.price * item.quantity;
    const discountedItemTotal = item.discountedPrice * item.quantity;
    
    totalOriginalAmount += originalItemTotal;
    totalDiscountedAmount += discountedItemTotal;

    const cells: TableCell[] = [
      { text: (index + 1).toString(), x: COLUMN_POSITIONS.SERIAL, width: COLUMN_WIDTHS.SERIAL },
      { text: item.name, x: COLUMN_POSITIONS.NAME, width: COLUMN_WIDTHS.NAME },
      { text: item.quantity.toString(), x: COLUMN_POSITIONS.QUANTITY + COLUMN_WIDTHS.QUANTITY, width: COLUMN_WIDTHS.QUANTITY, align: 'right' },
      { text: formatCurrency(item.price), x: COLUMN_POSITIONS.ORIGINAL_PRICE + COLUMN_WIDTHS.ORIGINAL_PRICE, width: COLUMN_WIDTHS.ORIGINAL_PRICE, align: 'right' },
      { text: formatCurrency(item.discountedPrice), x: COLUMN_POSITIONS.DISCOUNTED_PRICE + COLUMN_WIDTHS.DISCOUNTED_PRICE, width: COLUMN_WIDTHS.DISCOUNTED_PRICE, align: 'right' },
      { text: formatCurrency(discountedItemTotal), x: COLUMN_POSITIONS.TOTAL + COLUMN_WIDTHS.TOTAL, width: COLUMN_WIDTHS.TOTAL, align: 'right' }
    ];

    y = drawTableRow(pdf, y, cells);
  });

  return { 
    endY: y, 
    totalOriginal: totalOriginalAmount, 
    totalDiscounted: totalDiscountedAmount 
  };
};