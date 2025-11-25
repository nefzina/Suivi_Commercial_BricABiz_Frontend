import axios from "axios";
import type { TopSeller } from "../types/TopSeller";

export async function fetchTopSellers(
  fromDate: string,
  toDate: string
): Promise<TopSeller[]> {
  try {
    const res = await axios.get<TopSeller[]>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/ca/salesperson?from=${fromDate}&to=${toDate}`
    );

    return res.data;
  } catch (error) {
    console.error("fetch sellers list failed.");
    return [];
  }
}
