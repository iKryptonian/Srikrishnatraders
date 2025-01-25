import jsPDF from 'jspdf';
import type { CartItem } from '../types/CartItem';
import type { UserDetails } from '../types/UserDetails';

export const generateCartPDF = (cartItems: CartItem[], userDetails: UserDetails) => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  
  // Add shop banner
  pdf.addImage('https://source.unsplash.com/1200x300/?fireworks', 'JPEG', 10, 10, pageWidth - 20, 30);
  
  // Add title
  pdf.setFontSize(22);
  pdf.text('Sparkle Fireworks - Order Details', pageWidth / 2, 50, { align: 'center' });
  
  // Add user details
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  let y = 70;
  pdf.text('Customer Details:', 20, y);
  
  pdf.setFont('helvetica', 'normal');
  y += 10;
  pdf.text(`Name: ${userDetails.name}`, 20, y);
  y += 10;
  pdf.text(`Phone: ${userDetails.phone}`, 20, y);
  y += 10;
  pdf.text(`Delivery Address: ${userDetails.address}`, 20, y);
  
  // Add column headers
  y += 20;
  pdf.setFont('helvetica', 'bold');
  pdf.text('S.No', 20, y);
  pdf.text('Product Name', 40, y);
  pdf.text('Quantity', 120, y);
  pdf.text('Original Price', 150, y);
  pdf.text('Discounted Price', 180, y);
  pdf.text('Total', 220, y);
  
  // Add items
  pdf.setFont('helvetica', 'normal');
  y += 10;
  
  let totalOriginalAmount = 0;
  let totalDiscountedAmount = 0;
  
  cartItems.forEach((item, index) => {
    if (y > 270) {
      pdf.addPage();
      y = 20;
    }
    
    const originalItemTotal = item.price * item.quantity;
    const discountedItemTotal = item.discountedPrice * item.quantity;
    
    totalOriginalAmount += originalItemTotal;
    totalDiscountedAmount += discountedItemTotal;
    
    pdf.text(`${index + 1}`, 20, y);
    pdf.text(item.name, 40, y);
    pdf.text(`${item.quantity}`, 120, y);
    pdf.text(`₹${item.price.toLocaleString('en-IN')}`, 150, y);
    pdf.text(`₹${item.discountedPrice.toLocaleString('en-IN')}`, 180, y);
    pdf.text(`₹${discountedItemTotal.toLocaleString('en-IN')}`, 220, y);
    y += 10;
  });
  
  // Add total calculations
  y += 10;
  pdf.setFont('helvetica', 'bold');
  pdf.text('Original Total:', 150, y);
  pdf.text(`₹${totalOriginalAmount.toLocaleString('en-IN')}`, 220, y);
  
  y += 10;
  pdf.text('Discount (80%):', 150, y);
  pdf.text(`-₹${(totalOriginalAmount - totalDiscountedAmount).toLocaleString('en-IN')}`, 220, y);
  
  y += 10;
  pdf.text('Final Amount:', 150, y);
  pdf.text(`₹${totalDiscountedAmount.toLocaleString('en-IN')}`, 220, y);
  
  // Add footer
  y += 20;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Thank you for shopping with Sparkle Fireworks!', pageWidth / 2, y, { align: 'center' });
  y += 10;
  pdf.text('All prices include applicable taxes', pageWidth / 2, y, { align: 'center' });
  
  pdf.save('sparkle-fireworks-order.pdf');
};

export const generatePriceList = (products: any[]) => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  
  // Add shop banner
  pdf.addImage('https://source.unsplash.com/1200x300/?fireworks', 'JPEG', 10, 10, pageWidth - 20, 30);
  
  // Add title
  pdf.setFontSize(22);
  pdf.text('Sparkle Fireworks - Price List', pageWidth / 2, 50, { align: 'center' });
  
  // Add date
  pdf.setFontSize(10);
  pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, 60, { align: 'center' });
  
  // Add column headers
  let y = 70;
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('S.No', 20, y);
  pdf.text('Product Name', 40, y);
  pdf.text('Category', 120, y);
  pdf.text('Original Price', 160, y);
  pdf.text('After Discount', 190, y);
  
  // Add items
  pdf.setFont('helvetica', 'normal');
  y += 10;
  
  products.forEach((product, index) => {
    if (y > 270) {
      pdf.addPage();
      y = 20;
      
      // Add headers on new page
      pdf.setFont('helvetica', 'bold');
      pdf.text('S.No', 20, y);
      pdf.text('Product Name', 40, y);
      pdf.text('Category', 120, y);
      pdf.text('Original Price', 160, y);
      pdf.text('After Discount', 190, y);
      
      pdf.setFont('helvetica', 'normal');
      y += 10;
    }
    
    pdf.text(`${index + 1}`, 20, y);
    pdf.text(product.name, 40, y);
    pdf.text(product.category, 120, y);
    pdf.text(`₹${product.price.toLocaleString('en-IN')}`, 160, y);
    pdf.text(`₹${product.discountedPrice.toLocaleString('en-IN')}`, 190, y);
    y += 10;
  });
  
  // Add footer
  y += 10;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Special Diwali Offer: 80% OFF on all items!', pageWidth / 2, y, { align: 'center' });
  y += 10;
  pdf.setFont('helvetica', 'normal');
  pdf.text('* Prices are subject to change without prior notice', pageWidth / 2, y, { align: 'center' });
  y += 10;
  pdf.text('* All prices include applicable taxes', pageWidth / 2, y, { align: 'center' });
  
  pdf.save('sparkle-fireworks-price-list.pdf');
};