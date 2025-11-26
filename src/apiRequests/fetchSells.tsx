import axios from "axios";

export async function fetchWonSales(
  fromDate: string,
  toDate: string
): Promise<number> {
  try {
    const res = await axios.get<number>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/wonsales?from=${fromDate}&to=${toDate}`
    );

    return res.data[0]!.wonSales;
  } catch (error) {
    console.error("Failed to fetch total number of sells.");
    return 0;
  }
}

export async function fetchSalesPersonCA(
  fromDate: string,
  toDate: string,
  salesPersonId: string
): Promise<number> {
  try {
    const res = await axios.get<number>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/ca/salesperson/${salesPersonId}?from=${fromDate}&to=${toDate}`
    );

    return res.data;
  } catch (error) {
    console.error("Failed to fetch sales person CA.");
    return 0;
  }
}

export async function fetchSalespersonNbSells(
  fromDate: string,
  toDate: string,
  salesPersonId: string
): Promise<number> {
  try {
    const res = await axios.get<number>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/salesReports/nbsells/salesperson/${salesPersonId}?from=${fromDate}&to=${toDate}`
    );
    console.log("verifier seller sales", res.data);

    return res.data[0]!.totalQty;
  } catch (error) {
    console.error("Failed to fetch total number of sells.");
    return 0;
  }
}
