import axios from "axios";
import type { CAByZone } from "../types/CAByZone";

export async function fetchCAByZone(
  fromDate: string,
  toDate: string
): Promise<CAByZone[]> {
  try {
    const res = await axios.get<CAByZone[]>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/ca/zone?from=${fromDate}&to=${toDate}`
    );
      
    return res.data;
  } catch (error) {
    console.error("Failed to fetch CA by geographic zones.");
    return [];
  }
}
