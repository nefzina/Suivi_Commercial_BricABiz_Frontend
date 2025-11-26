import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { generateColors } from "../services/generateColors";
import type { CAByCategory } from "../types/CA";
import { fetchCAByCategory } from "../apiRequests/fetchCA";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Dates {
  fromDate: string;
  toDate: string;
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "CA / Categorie de produits",
    },
  },
};

export function CAByCategory({ fromDate, toDate }: Dates) {
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    labels: [],
    datasets: [
      {
        label: "CA par categorie",
        data: [],
        backgroundColor: [],
      },
    ],
  });

  const [caByCategory, setCAByCategory] = useState<CAByCategory[]>([]);

  useEffect(() => {
    const loadingCAByCategory = async () => {
      try {
        const list: CAByCategory[] = await fetchCAByCategory(fromDate, toDate);

        const colors = generateColors(list.length);

        setChartData({
          labels: ["CA"],
          datasets: list.map((o, i) => ({
            label: o.categoryName,
            data: [o.totalCA],
            backgroundColor: colors[i].bg,
          })),
        });
      } catch (error) {
        console.error("Failed to fetch CA by Category:", error);
      }
    };

    loadingCAByCategory();
  }, [fromDate, toDate]);

  return (
    <div className="caByCategoryChart">
      <Bar options={options} data={chartData} />
    </div>
  );
}
