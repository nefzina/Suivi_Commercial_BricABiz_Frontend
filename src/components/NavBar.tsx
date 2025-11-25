import { useNavigate } from "react-router";

export function NavBar() {
  const navigate = useNavigate();
  const goManagerDashboard = () => {
    navigate("/managerDashboard");
  };
  const goSalesPersonDashboard = () => {
    navigate("/salesPersonDashboard");
  };

  return (
    <nav>
      <button onClick={goManagerDashboard}>Manager</button>
      <button onClick={goSalesPersonDashboard}>Commercial</button>

    </nav>
  );
}
