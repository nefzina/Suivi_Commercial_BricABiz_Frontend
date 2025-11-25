import type { Client } from "./Client";
import type { Product } from "./Product";
import type { User } from "./User";
import type { Zone } from "./Zone";

export interface SaleReport {
  title: string;
  clientId: Client;
  salesPersonId: User;
  zoneId: Zone;
  products: [
    {
      productId: Product;
      qty: number;
    }
  ];
  totalAmount: number;
  expectedCloseDate: Date;
  status: string;
  probability: number;
  notes: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}
