import { useEffect, useState } from "react";
import { fetchWonSales, fetchSalesPersonCA, fetchSalespersonNbSells } from "../apiRequests/fetchSells";
import "../styles/kpiCards.scss";
import { fetchTotalCA } from "../apiRequests/fetchCA";

interface Inputs {
  fromDate: string;
  toDate: string;
  salesPersonId: string;
  titles: string[];
}
export function KpiCards({ fromDate, toDate, salesPersonId, titles }: Inputs) {
  const [totalCA, setTotalCA] = useState<number>(0);
  const [wonSales, setwonSales] = useState<number>(0);

  useEffect(() => {
    const loadingCA = async () => {
      let isMounted = true;
      try {
        const ca: number = !!salesPersonId 
        ? await fetchSalesPersonCA(fromDate, toDate, salesPersonId)
        : await fetchTotalCA(fromDate, toDate);
        
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
  }, [fromDate, toDate]);

  useEffect(() => {
    const loadingNbSells = async () => {
      let isMounted = true;
      try {
        const nbSells: number = !!salesPersonId 
        ? await fetchSalespersonNbSells(fromDate, toDate, salesPersonId)
        : await fetchWonSales(fromDate, toDate);
        
        if (isMounted) setwonSales(nbSells);
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
        <p className="value"> {wonSales} </p>
      </div>
    </div>
  );
}
