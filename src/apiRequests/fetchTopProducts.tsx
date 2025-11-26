import axios from "axios";
import type { TopProduct } from "../types/TopProducts";

export async function fetchTopProducts(
  fromDate: string,
  toDate: string
): Promise<TopProduct[]> {
  try {
    const res = await axios.get<TopProduct[]>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/sells/product?from=${fromDate}&to=${toDate}`
    );
      
    return res.data;
  } catch (error) {
    console.error("Failed to fetch top products.");
    return [];
  }
}
