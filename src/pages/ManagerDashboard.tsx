import {  useState } from "react";
import { ProductCA } from "../components/ProductCA";
import { TopSalesPerson } from "../components/TopSalesPerson";
import { dates } from "../services/dates";
import { CAPerZone } from "../components/CAByZone";
import "../styles/managerDashboard.scss";
import { KpiCards } from "../components/KpiCards";

export function ManagerDashboard() {
  const [fromDate, setFromDate] = useState<string>(dates.fromDate);
  const [toDate, setToDate] = useState<string>(dates.toDate);
  

  return (
    <div className="managerDashboard">
      <KpiCards fromDate={fromDate} toDate={toDate}/>
      <ProductCA fromDate={fromDate} toDate={toDate} />
      <TopSalesPerson fromDate={fromDate} toDate={toDate} />
      <CAPerZone fromDate={fromDate} toDate={toDate} />
    </div>
  );
}
