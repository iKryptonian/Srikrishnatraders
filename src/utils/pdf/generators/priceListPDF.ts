import { jsPDF } from 'jspdf';
import type { Product } from '../../../types/Product';
import { PDF_SETTINGS } from '../constants';
import { formatCurrency, formatDate, truncateText } from '../formatters';
import { addHeader } from '../components/header';
import { addFooter } from '../components/footer';

const PRICE_LIST_COLUMNS = {
  SERIAL: 20,
  NAME: 40,
  CATEGORY: 120,
  ORIGINAL_PRICE: 160,
  DISCOUNTED_PRICE: 190
} as const;

const PRICE_LIST_WIDTHS = {
  SERIAL: 15,
  NAME: 75,
  CATEGORY: 35,
  ORIGINAL_PRICE: 25,
  DISCOUNTED_PRICE: 25
} as const;

const addPriceListHeaders = (pdf: jsPDF, y: number): void => {
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.BOLD);
  
  const headers = [
    { text: 'S.No', x: PRICE_LIST_COLUMNS.SERIAL, width: PRICE_LIST_WIDTHS.SERIAL },
    { text: 'Product Name', x: PRICE_LIST_COLUMNS.NAME, width: PRICE_LIST_WIDTHS.NAME },
    { text: 'Category', x: PRICE_LIST_COLUMNS.CATEGORY, width: PRICE_LIST_WIDTHS.CATEGORY },
    { text: 'Original Price', x: PRICE_LIST_COLUMNS.ORIGINAL_PRICE, width: PRICE_LIST_WIDTHS.ORIGINAL_PRICE },
    { text: 'After Discount', x: PRICE_LIST_COLUMNS.DISCOUNTED_PRICE, width: PRICE_LIST_WIDTHS.DISCOUNTED_PRICE }
  ];

  headers.forEach(header => {
    pdf.text(header.text, header.x, y, { maxWidth: header.width });
  });

  // Add horizontal line
  y += 2;
  pdf.setLineWidth(0.5);
  pdf.line(
    PDF_SETTINGS.MARGIN.LEFT,
    y,
    pdf.internal.pageSize.getWidth() - PDF_SETTINGS.MARGIN.RIGHT,
    y
  );
};

export const generatePriceList = (products: Product[]): void => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  
  let y = addHeader(pdf, 'Sparkle Fireworks - Price List');
  
  // Add date
  pdf.setFontSize(PDF_SETTINGS.FONT.SIZES.BODY);
  pdf.text(`Generated on: ${formatDate(new Date())}`, pageWidth / 2, y - 10, { align: 'center' });
  
  addPriceListHeaders(pdf, y);
  y += 10;
  
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.NORMAL);
  
  products.forEach((product, index) => {
    if (y > PDF_SETTINGS.PAGE.MAX_Y) {
      pdf.addPage();
      y = PDF_SETTINGS.PAGE.START_Y;
      addPriceListHeaders(pdf, y);
      y += 10;
    }
    
    const serialNo = (index + 1).toString().padStart(2, '0');
    const truncatedName = truncateText(product.name, PRICE_LIST_WIDTHS.NAME);
    
    pdf.text(serialNo, PRICE_LIST_COLUMNS.SERIAL, y);
    pdf.text(truncatedName, PRICE_LIST_COLUMNS.NAME, y);
    pdf.text(product.category, PRICE_LIST_COLUMNS.CATEGORY, y);
    pdf.text(
      formatCurrency(product.price),
      PRICE_LIST_COLUMNS.ORIGINAL_PRICE + PRICE_LIST_WIDTHS.ORIGINAL_PRICE,
      y,
      { align: 'right' }
    );
    pdf.text(
      formatCurrency(product.discountedPrice),
      PRICE_LIST_COLUMNS.DISCOUNTED_PRICE + PRICE_LIST_WIDTHS.DISCOUNTED_PRICE,
      y,
      { align: 'right' }
    );
    
    y += 8;
  });
  
  // Add special offer text
  y += 10;
  pdf.setFontSize(PDF_SETTINGS.FONT.SIZES.BODY);
  pdf.setFont(PDF_SETTINGS.FONT.FAMILIES.BOLD);
  pdf.text('Special Diwali Offer: 80% OFF on all items!', pageWidth / 2, y, { align: 'center' });
  
  addFooter(pdf, y + 20);
  
  pdf.save('sparkle-fireworks-price-list.pdf');
};