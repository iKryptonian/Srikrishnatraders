import { jsPDF } from 'jspdf';
import type { UserDetails } from '../../../types/UserDetails';
import { PDF_SETTINGS } from '../constants';

export const addUserDetails = (
  pdf: jsPDF,
  userDetails: UserDetails,
  startY: number
): number => {
  let y = startY;
  
  pdf.setFontSize(PDF_SETTINGS.FONT.SIZES.SUBTITLE);
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.BOLD);
  pdf.text('Customer Details:', PDF_SETTINGS.MARGIN.LEFT, y);
  
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.NORMAL);
  y += 8; // Reduced spacing
  
  const details = [
    { label: 'Name', value: userDetails.name },
    { label: 'Phone', value: userDetails.phone },
    { label: 'Delivery Address', value: userDetails.address }
  ];

  details.forEach(detail => {
    pdf.text(`${detail.label}:`, PDF_SETTINGS.MARGIN.LEFT, y);
    pdf.text(detail.value, PDF_SETTINGS.MARGIN.LEFT + 25, y);
    y += 6; // Reduced spacing between details
  });
  
  return y + 10;
};