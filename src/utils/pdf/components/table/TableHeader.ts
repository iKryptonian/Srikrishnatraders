import { jsPDF } from 'jspdf';
import { PDF_SETTINGS } from '../../constants';

export interface TableColumn {
  text: string;
  x: number;
  width: number;
}

export const drawTableHeader = (
  pdf: jsPDF,
  y: number,
  columns: TableColumn[],
  addSeparator: boolean = true
): number => {
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.BOLD);
  
  columns.forEach(header => {
    pdf.text(header.text, header.x, y, { maxWidth: header.width });
  });

  if (addSeparator) {
    y += 2;
    pdf.setLineWidth(0.5);
    pdf.line(
      PDF_SETTINGS.MARGIN.LEFT,
      y,
      pdf.internal.pageSize.getWidth() - PDF_SETTINGS.MARGIN.RIGHT,
      y
    );
  }

  return y;
};