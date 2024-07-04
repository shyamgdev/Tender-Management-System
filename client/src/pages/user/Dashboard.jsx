import { useState, useEffect } from "react";
import {
  getTenders,
  createBid,
  getBidsByTenderId,
} from "../../api/tenderService";
import { formateDate } from "../../functions/formatDate";
import Modal from "../../components/Modal";
import NewBid from "../../components/NewBid";

const UserDashboard = () => {
  const [showBidModel, setShowBidModel] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [selectedTender, setSelectedTender] = useState(null);
  const [bidData, setBidData] = useState({
    companyName: "",
    bidCost: "",
    tenderId: "",
  });
  const [bids, setBids] = useState([]);

  const handleBidChange = (e) => {
    const { name, value } = e.target;
    setBidData({ ...bidData, [name]: value });
  };

  const fetchBids = async () => {
    const bids = await getBidsByTenderId(selectedTender._id);
    setBids(bids);
  };

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBid({
        ...bidData,
        tenderId: selectedTender._id,
      });
      fetchBids();
      setShowBidModel(false);
    } catch (error) {
      console.error("Error creating bid", error);
    }
  };

  useEffect(() => {
    const fetchTenders = async () => {
      const tenders = await getTenders();
      setTenders(tenders);
    };
    fetchTenders();
  }, []);

  useEffect(() => {
    if (selectedTender) {
      fetchBids();
    }
  }, [selectedTender]);

  return (
    <div className="p-4">
      <h2 className="mb-2 text-2xl font-bold">Available Tenders</h2>
      <div className="w-full p-4 text-sm bg-white rounded-lg shadow-md border divide-y overflow-auto">
        <table className="w-full table-auto *:text-left divide-y space-y-2">
          <thead>
            <tr className="*:p-2">
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="*:p-2 text-body">
            {tenders?.map((tender, i) => (
              <tr key={i} className="*:p-2">
                <td>
                  <div className="w-24 truncate">{tender?._id}</div>{" "}
                </td>
                <td>{tender.name}</td>
                <td>{tender.description}</td>
                <td>{formateDate(tender.startTime)}</td>
                <td>{formateDate(tender.endTime)}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedTender(tender);
                      setShowBidModel(true);
                    }}
                    className="text-xs bg-[blue] text-white px-1 py-2 rounded"
                  >
                    Submit Quotation
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedTender && (
        <Modal showModal={showBidModel} setShowModal={setShowBidModel}>
          <NewBid tender={selectedTender} />
        </Modal>
      )}
    </div>
  );
};

export default UserDashboard;
