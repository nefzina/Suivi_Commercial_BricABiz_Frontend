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

ChartJS.register(ArcElement, Tooltip, Legend);

function generateColors(count: number) {
  return Array.from({ length: count }).map((_, i) => {
    const hue = (i * (360 / count)) % 360;
    return {
      bg: `hsl(${hue}, 70%, 70%)`,
      border: `hsl(${hue}, 70%, 40%)`,
    };
  });
}

export function ProductCA() {
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
  const fromDate = "2025-08-30";
  const toDate = "2025-11-26";

  useEffect(() => {
    const loadingTopProducts = async () => {
      try {
        const list: TopProduct[] = await fetchTopProducts(fromDate, toDate);

        const colors = generateColors(list.length);

        setChartData({
          labels: list.map((o) => o._id),
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
