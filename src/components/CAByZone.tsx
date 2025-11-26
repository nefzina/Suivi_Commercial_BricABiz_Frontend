import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { generateColors } from "../services/generateColors";
import type { CAByZone } from "../types/CA";

import "../styles/caByZone.scss";
import { fetchCAByZone } from "../apiRequests/fetchCA";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Dates {
  fromDate: string;
  toDate: string;
}

export function CAPerZone({fromDate, toDate}: Dates) {
  const [chartData, setChartData] = useState<ChartData<"pie">>({
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

  const [caByZone, setCAByZone] = useState<CAByZone[]>([]);

  useEffect(() => {
    const loadingCAByZone = async () => {
      try {
        const list: CAByZone[] = await fetchCAByZone(fromDate, toDate);

        const colors = generateColors(list.length);

        setChartData({
          labels: list.map((o) => o._id),
          datasets: [
            {
              label: "CA by zone",
              data: list.map((o) => o.totalCA),
              backgroundColor: colors.map((c) => c.bg),
              borderColor: colors.map((c) => c.border),
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Failed to fetch CA by geo zones:", error);
      }
    };

    loadingCAByZone();
  }, [fromDate, toDate]);

  return (
    <div className="caByZoneChart">
      <Pie data={chartData} />;
    </div>
  );
}
