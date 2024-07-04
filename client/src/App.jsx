import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBidsManagement from "./pages/admin/AdminBidsManagement";
import Home from "./pages/Home";
import Notification from "./components/Notifications";

function App() {
  return (
    <>
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/bids/:id" element={<AdminBidsManagement />} />
      </Routes>
    </>
  );
}

export default App;
