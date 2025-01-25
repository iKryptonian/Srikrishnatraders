export const PDF_SETTINGS = {
  MARGIN: {
    TOP: 10,
    LEFT: 15,
    RIGHT: 15,
    BOTTOM: 15
  },
  FONT: {
    SIZES: {
      TITLE: 18,
      SUBTITLE: 10,
      BODY: 8
    },
    FAMILIES: {
      NORMAL: 'helvetica',
      BOLD: 'helvetica-bold'
    }
  },
  PAGE: {
    MAX_Y: 280,
    START_Y: 20
  }
} as const;

// Adjusted column positions for better spacing
export const COLUMN_POSITIONS = {
  SERIAL: 15,
  NAME: 30,
  QUANTITY: 120,
  ORIGINAL_PRICE: 140,
  DISCOUNTED_PRICE: 170,
  TOTAL: 200
} as const;

// Adjusted column widths
export const COLUMN_WIDTHS = {
  SERIAL: 10,
  NAME: 85,
  QUANTITY: 15,
  ORIGINAL_PRICE: 25,
  DISCOUNTED_PRICE: 25,
  TOTAL: 25
} as const;