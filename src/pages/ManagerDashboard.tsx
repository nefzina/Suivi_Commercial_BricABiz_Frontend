import { ProductCA } from "../components/ProductCA";
import { TopSalesPerson } from "../components/TopSalesPerson";
import "../styles/managerDashboard.scss";

export function ManagerDashboard() {
  return (
    <div className="managerDashboard">
      <ProductCA/>
      <TopSalesPerson />
    </div>
  );
}
