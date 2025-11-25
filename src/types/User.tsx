import type { Zone } from "./Zone";

export interface User {
  fullname: string;
  email: string;
  role: string;
  zoneId: Zone;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
