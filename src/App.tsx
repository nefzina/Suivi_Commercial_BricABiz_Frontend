import { useState } from "react";
import { Route, Routes } from "react-router";
import { ManagerDashboard } from "./pages/ManagerDashboard";
import { SalesPersonDashboard } from "./pages/SalesPersonDashboard";
import { Login } from "./pages/Login";
import "./App.scss";
import { NavBar } from "./components/NavBar";

function App() {

  return (
    <div className="app">
      <NavBar/>
      {/* <SideBar/> */}

      <Routes>
        <Route path="/" element={<Login />} />
        {/* protected route if auth exist */}
        <Route path="/managerDashboard" element={<ManagerDashboard />} />{" "}
        {/* protected route if auth exist */}
        <Route
          path="/salesPersonDashboard"
          element={<SalesPersonDashboard />}
        />{" "}
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
