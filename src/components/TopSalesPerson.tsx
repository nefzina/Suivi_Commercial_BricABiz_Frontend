import { useEffect, useState } from "react";
import { fetchTopSellers } from "../apiRequests/fetchTopSellers";
import type { User } from "../types/User";
import type { TopSeller } from "../types/TopSeller";
import "../styles/topSellers.scss";

export function TopSalesPerson() {
  const [sellersList, setSellersList] = useState<TopSeller[]>([]);
  const fromDate = "2025-08-30";
  const toDate = "2025-11-26";

  useEffect(() => {
    const loadingSalesPersons = async () => {
      let isMounted = true;
      try {
        const sellersList: TopSeller[] = await fetchTopSellers(
          fromDate,
          toDate
        );
        if (isMounted) setSellersList(sellersList);
      } catch (error) {
        console.error("Failed to fetch sellers list:", error);
        setSellersList([]);
      } finally {
        return () => {
          isMounted = false;
        };
      }
    };
    loadingSalesPersons();
  }, []);

  return (
    <div className="topSeller-container">
      <h3>Top Seller</h3>
      <div className="list">
        {sellersList.map((seller, i) => (
          <li key={seller._id}>
            <div className="left-container">
              <p className="name">{seller._id}</p>
              <p className="totalCA">{seller.totalCA} € de CA</p>
            </div>
            <p className="rightContainer">{i + 1}</p>
          </li>
        ))}
      </div>
    </div>
  );
}
