import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const BaseApp = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default BaseApp;
