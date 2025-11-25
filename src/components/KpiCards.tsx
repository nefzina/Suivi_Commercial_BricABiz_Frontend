import { useEffect, useState } from "react";
import { fetchCA, fetchNbSells } from "../apiRequests/fetch_CA_NbSells";
import "../styles/kpiCards.scss";

interface Dates {
  fromDate: string;
  toDate: string;
}
export function KpiCards({ fromDate, toDate }: Dates) {
  const [totalCA, setTotalCA] = useState<number>(0);
  const [nbSells, setNbSells] = useState<number>(0);

  useEffect(() => {
    const loadingCA = async () => {
      let isMounted = true;
      try {
        const ca: number = await fetchCA(fromDate, toDate);
        if (isMounted) setTotalCA(ca);
      } catch (error) {
        console.error("Failed to fetch CA:", error);
      } finally {
        return () => {
          isMounted = false;
        };
      }
    };
    loadingCA();
  }, []);

  useEffect(() => {
    const loadingNbSells = async () => {
      let isMounted = true;
      try {
        const ca: number = await fetchNbSells(fromDate, toDate);
        if (isMounted) setNbSells(ca);
      } catch (error) {
        console.error("Failed to fetch CA:", error);
      } finally {
        return () => {
          isMounted = false;
        };
      }
    };
    loadingNbSells();
  }, []);

  return (
    <div className="kpi-cards">
      <div className="kpi-card">
        <p className="title">Chiffre d'affaire</p>
        <p className="value">{totalCA} €</p>
      </div>

      <div className="kpi-card">
        <p className="title">Nombre de vente</p>
        <p className="value"> {nbSells} </p>
      </div>
    </div>
  );
}
