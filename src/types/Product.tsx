import type { Category } from "./Category";


export interface Product {
    name: string;
    sku: string;
    category: Category;
    unitPrice: number;
    costPrice: number;
    active: boolean;
  }
  