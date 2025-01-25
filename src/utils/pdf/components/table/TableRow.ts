import { jsPDF } from 'jspdf';
import { truncateText } from '../../formatters';

export interface TableCell {
  text: string;
  x: number;
  width: number;
  align?: 'left' | 'right' | 'center';
}

export const drawTableRow = (
  pdf: jsPDF,
  y: number,
  cells: TableCell[],
  truncate: boolean = true
): number => {
  cells.forEach(cell => {
    const text = truncate ? truncateText(cell.text, cell.width) : cell.text;
    const xPos = cell.align === 'right' ? cell.x + cell.width : cell.x;
    
    pdf.text(text, xPos, y, { 
      align: cell.align || 'left',
      maxWidth: cell.width 
    });
  });

  return y + 8;
};