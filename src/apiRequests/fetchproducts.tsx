import axios from "axios";
import type { Product } from "../types/Product";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await axios.get<Product[]>(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/products`
    );
      
    return res.data;
  } catch (error) {
    console.error("Failed to fetch products.");
    return [];
  }
}
