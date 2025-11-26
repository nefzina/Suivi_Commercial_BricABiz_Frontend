import axios from "axios";
import type { CAByCategory, CAByZone } from "../types/CA";

export async function fetchTotalCA(
  fromDate: string,
  toDate: string
): Promise<number> {
  try {
    const res = await axios.get<number>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/ca?from=${fromDate}&to=${toDate}`
    );

    return res.data;
  } catch (error) {
    console.error("Failed to fetch total CA.");
    return 0;
  }
}

export async function fetchCAByCategory(
  fromDate: string,
  toDate: string
): Promise<CAByCategory[]> {
  try {
    const res = await axios.get<CAByCategory[]>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/ca/productcategory?from=${fromDate}&to=${toDate}`
    );
      
    return res.data;
  } catch (error) {
    console.error("Failed to fetch CA by product category.");
    return [];
  }
}


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

