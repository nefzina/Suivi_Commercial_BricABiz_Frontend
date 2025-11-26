export interface Client {
  name: string;
  vatNumber: string;
  address: { city: string; postalCode: string; country: string };
  assignedTo: string;
  createdAt: Date;
  tags: [string];
}
