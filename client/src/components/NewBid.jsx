import { useState, useEffect, useContext } from "react";
import { createBid, getLowestBidsByTenderId } from "../api/tenderService.js";
import { AuthContext } from "../api/authContext.jsx";
import { useAlert } from "react-alert";

function NewBid({ tender }) {
  const alert = useAlert();
  const { user } = useContext(AuthContext);
  const [bidData, setBidData] = useState({
    companyName: "",
    bidCost: "",
    tenderId: "",
  });
  const [lowestBid, setLowestBid] = useState();

  const fetchLowestBid = async () => {
    const lowestBidData = await getLowestBidsByTenderId(tender._id);
    setLowestBid(lowestBidData.bidCost);
  };
  useEffect(() => {
    fetchLowestBid();
  }, [tender._id]);
  const handleBidChange = (e) => {
    const { name, value } = e.target;
    setBidData({ ...bidData, [name]: value });
  };

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBid({
        ...bidData,
        tenderId: tender._id,
        userId: user._id,
      });
      alert.success("Quotation Submitted Successfully!");
      fetchLowestBid();
    } catch (error) {
      console.error("Error creating bid", error.message);
      alert.error("Error creating bid", error.message);
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
      <h1 className="pt-2 font-semibold">Lowest Bid - {lowestBid}</h1>
    </div>
  );
}

export default NewBid;
