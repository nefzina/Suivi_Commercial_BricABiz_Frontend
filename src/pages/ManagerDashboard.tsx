import { useState } from "react";
import { ProductCA } from "../components/ProductCA";
import { TopSalesPerson } from "../components/TopSalesPerson";
import { dates } from "../services/dates";
import { CAPerZone } from "../components/CAByZone";
import "../styles/managerDashboard.scss";
import { KpiCards } from "../components/KpiCards";
import { CAByCategory } from "../components/CAByCategory";
import BasicDatePicker from "../components/DatePicker";

export function ManagerDashboard() {
  const [fromDate, setFromDate] = useState<string>(dates.fromDate);
  const [toDate, setToDate] = useState<string>(dates.toDate);

  return (
    <div className="managerDashboard">
      <div className="datesContainer">
        <div className="fromDate">
          <BasicDatePicker label="from" setDate={setFromDate}/>
        </div>
        <div className="toDate">
          <BasicDatePicker label="to" setDate={setToDate}/>
        </div>
      </div>
      <KpiCards fromDate={fromDate} toDate={toDate} />
      <ProductCA fromDate={fromDate} toDate={toDate} />
      <TopSalesPerson fromDate={fromDate} toDate={toDate} />
      <CAPerZone fromDate={fromDate} toDate={toDate} />
      <CAByCategory fromDate={fromDate} toDate={toDate} />
    </div>
  );
}
