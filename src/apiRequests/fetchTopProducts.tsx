import axios from "axios";
import type { TopProducts } from "../types/TopProducts";

export async function fetchTopProducts(
  fromDate: string,
  toDate: string
): Promise<TopProducts[]> {
  try {
    const res = await axios.get<TopProducts[]>(
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
