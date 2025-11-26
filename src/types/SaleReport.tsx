export interface SaleReport {
  title: string;
  clientId: string;
  salesPersonId: string;
  zoneId: string;
  products: [
    {
      productId: string;
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

export const SalesReportStatus = {
  Lead: "lead",
  Qualified: "qualified",
  Proposal: "proposal",
  Won: "won",
  Lost: "lost",
} as const;

export type SalesReportStatus =
  typeof SalesReportStatus[keyof typeof SalesReportStatus];