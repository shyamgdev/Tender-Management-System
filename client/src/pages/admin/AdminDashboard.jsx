import { useState } from "react";
import CreateTender from "./CreateTender";
import TenderList from "../TenderList";

const AdminDashboard = () => {
  const [tenders, setTenders] = useState([]);

  const addTender = (newTender) => {
    setTenders([...tenders, newTender]);
  };

  return (
    <div className="p-4">
      <h1 className="w-full text-white text-center text-xl bg-green-600 p-2 rounded-lg shadow-md">Admin Dashboard</h1>
      <CreateTender
        tenders={tenders}
        setTenders={setTenders}
        addTender={addTender}
      />
      <TenderList tenders={tenders} setTenders={setTenders} />
    </div>
  );
};

export default AdminDashboard;
