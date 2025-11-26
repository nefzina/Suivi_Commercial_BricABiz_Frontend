export interface User {
  fullname: string;
  email: string;
  role: string;
  zoneId: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TopSeller {
  _id: string;
  totalCA: number;
  count: number;
}