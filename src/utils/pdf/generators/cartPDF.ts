import { jsPDF } from 'jspdf';
import type { CartItem } from '../../../types/CartItem';
import type { UserDetails } from '../../../types/UserDetails';
import { addHeader } from '../components/header';
import { addFooter } from '../components/footer';
import { drawCartTable } from '../layouts/cart/CartTableLayout';
import { drawCartTotals } from '../layouts/cart/CartTotalsLayout';
import { addUserDetails } from '../layouts/UserDetailsLayout';

export const generateCartPDF = (cartItems: CartItem[], userDetails: UserDetails): void => {
  const pdf = new jsPDF();
  
  let y = addHeader(pdf, 'Sparkle Fireworks - Order Details');
  y = addUserDetails(pdf, userDetails, y);
  
  const { endY, totalOriginal, totalDiscounted } = drawCartTable(pdf, cartItems, y);
  y = drawCartTotals(pdf, endY, totalOriginal, totalDiscounted);
  
  addFooter(pdf, y + 20);
  
  pdf.save('sparkle-fireworks-order.pdf');
};