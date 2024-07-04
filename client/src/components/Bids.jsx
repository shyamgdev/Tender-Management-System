// src/components/BidsManagement.js
import { useState, useEffect } from "react";
import { getBidsByTenderId } from "../api/tenderService";
import { formateDate } from "../functions/formatDate";

const Bids = ({ tenderId }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      const bidsData = await getBidsByTenderId(tenderId);
      setBids(bidsData);
    };
    fetchBids();
  }, [tenderId]);

  return (
    <div className="p-4">
      <h2 className="mb-2 text-2xl font-bold">Bids for Tender {tenderId}</h2>
      <div className="w-full p-4 text-sm bg-white rounded-lg shadow-md border divide-y overflow-auto">
        <table className="w-full table-auto *:text-left divide-y space-y-2">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Bid Time</th>
              <th>Bid Cost</th>
              <th>Flag (Last 5 mins)</th>
            </tr>
          </thead>
          <tbody>
            {bids?.map((bid) => (
              <tr key={bid._id}>
                <td>{bid.companyName}</td>
                <td>{formateDate(bid.bidTime)}</td>
                <td>{bid.bidCost}</td>
                <td>{bid.placedInLastFiveMinutes ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bids;
