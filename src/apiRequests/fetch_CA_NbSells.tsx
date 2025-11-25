import axios from "axios";

export async function fetchCA(
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
    console.error("Failed to fetch CA.");
    return 0;
  }
}
export async function fetchNbSells(
  fromDate: string,
  toDate: string
): Promise<number> {
  try {
    const res = await axios.get<number>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/nbsells?from=${fromDate}&to=${toDate}`
    );
      console.log(res.data);
      
    return res.data[0]!.totalQty;
  } catch (error) {
    console.error("Failed to fetch total number of sells.");
    return 0;
  }
}
