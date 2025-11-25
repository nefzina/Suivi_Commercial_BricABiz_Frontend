import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { fetchTopProducts } from "../apiRequests/fetchTopProducts";
import type { TopProduct } from "../types/TopProducts";
import "../styles/productCA.scss";
import { generateColors } from "../services/generateColors";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Dates {
  fromDate: string;
  toDate: string;
}

export function ProductCA({ fromDate, toDate }: Dates) {
  const [chartData, setChartData] = useState<ChartData<"doughnut">>({
    labels: [],
    datasets: [
      {
        label: "CA par produit",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  const [productsList, setProductsList] = useState<TopProduct[]>([]);

  useEffect(() => {
    const loadingTopProducts = async () => {
      let isMounted = true;
      try {
        const list: TopProduct[] = await fetchTopProducts(fromDate, toDate);

        const colors = generateColors(list.length);

        if (isMounted)
          setChartData({
            labels: list.map((o) => `${o._id} - ${o.totalQty} unités vendues`),
            datasets: [
              {
                label: "CA par produit",
                data: list.map((o) => o.totalCA),
                backgroundColor: colors.map((c) => c.bg),
                borderColor: colors.map((c) => c.border),
                borderWidth: 1,
              },
            ],
          });
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        return () => {
          isMounted = false;
        };
      }
    };

    loadingTopProducts();
  }, []);

  return (
    <div className="productCAChart">
      <Doughnut data={chartData} />;
    </div>
  );
}
