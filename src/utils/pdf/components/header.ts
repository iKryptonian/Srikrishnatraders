import { jsPDF } from 'jspdf';
import { PDF_SETTINGS } from '../constants';

export const addHeader = (
  pdf: jsPDF,
  title: string,
  bannerUrl: string = 'https://source.unsplash.com/1200x300/?fireworks'
): number => {
  const pageWidth = pdf.internal.pageSize.getWidth();
  
  // Add banner
  pdf.addImage(
    bannerUrl,
    'JPEG',
    PDF_SETTINGS.MARGIN.LEFT,
    PDF_SETTINGS.MARGIN.TOP,
    pageWidth - (PDF_SETTINGS.MARGIN.LEFT * 2),
    30
  );
  
  // Add title
  pdf.setFontSize(PDF_SETTINGS.FONT.SIZES.TITLE);
  pdf.text(title, pageWidth / 2, 50, { align: 'center' });
  
  return 70; // Return next Y position
};