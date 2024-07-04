import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBidsManagement from "./pages/admin/AdminBidsManagement";
import Home from "./pages/Home";
import Notification from "./components/Notifications";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import { AuthProvider } from "./api/authContext";

function App() {
  return (
    <AuthProvider>
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/bids" element={<AdminBidsManagement />} />
        <Route path="/admin/bids/:id" element={<AdminBidsManagement />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
