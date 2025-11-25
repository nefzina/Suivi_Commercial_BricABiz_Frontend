import type { User } from "./User";

export interface Client {
  name: string;
  vatNumber: string;
  address: { city: string; postalCode: string; country: string };
  assignedTo: User;
  createdAt: Date;
  tags: [string];
}
