export interface Product {
  name: string;
  sku: string;
  categoryId: string;
  unitPrice: number;
  costPrice: number;
  active: boolean;
}

export interface Category {
  name: string;
}

export interface TopProduct {
  _id: string;
  totalCA: number;
  totalQty: number;
  count: number;
}
