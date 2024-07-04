import { useState } from "react";
import { createBid, getBidsByTenderId } from "../api/tenderService";

function NewBid({ tender }) {
  const [bidData, setBidData] = useState({
    companyName: "",
    bidCost: "",
    tenderId: "",
  });
  const handleBidChange = (e) => {
    const { name, value } = e.target;
    setBidData({ ...bidData, [name]: value });
  };

  const fetchBids = async () => {
    await getBidsByTenderId(tender._id);
  };

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBid({
        ...bidData,
        tenderId: tender._id,
      });
      fetchBids();
    } catch (error) {
      console.error("Error creating bid", error);
    }
  };
  return (
    <div>
      <h2>Submit a Bid for {tender.name}</h2>
      <form onSubmit={handleBidSubmit} className="space-y-2">
        <input
          name="companyName"
          value={bidData.companyName}
          onChange={handleBidChange}
          placeholder="Company Name"
        />
        <input
          name="bidCost"
          value={bidData.bidCost}
          onChange={handleBidChange}
          placeholder="Bid Cost"
        />
        <input type="hidden" name="tenderId" value={tender._id} />
        <button type="submit" className="btn">
          Submit Bid
        </button>
      </form>
    </div>
  );
}

export default NewBid;
