import { jsPDF } from 'jspdf';
import { PDF_SETTINGS } from '../constants';

export const addFooter = (pdf: jsPDF, y: number): void => {
  const pageWidth = pdf.internal.pageSize.getWidth();
  
  pdf.setFontSize(PDF_SETTINGS.FONT.SIZES.BODY);
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.NORMAL);
  
  pdf.text(
    'Thank you for shopping with Sparkle Fireworks!',
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  
  pdf.text(
    'All prices include applicable taxes',
    pageWidth / 2,
    y + 10,
    { align: 'center' }
  );
};