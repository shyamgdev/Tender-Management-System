import { useEffect } from "react";
import BidList from "./admin/BidList";
import { getTenders } from "../api/tenderService";
import { formateDate } from "../functions/formatDate";
import { Link } from "react-router-dom";

const TenderList = ({ tenders, setTenders }) => {
  useEffect(() => {
    const fetchTenders = async () => {
      const tenders = await getTenders();
      setTenders(tenders);
    };
    fetchTenders();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="mb-2 text-2xl font-bold">All Previous Tenders</h2>
        <Link to="/admin/bids" className="text-blue-700 underline">View all Bids</Link>
      </div>
      <div className="w-full p-4 text-sm bg-white rounded-lg shadow-md border divide-y overflow-auto">
        <table className="w-full table-auto *:text-left divide-y space-y-2">
          <thead>
            <tr className="*:p-2">
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Buffer Time</th>
            </tr>
          </thead>
          <tbody className="*:p-2 text-body">
            {tenders?.map((tender, i) => (
              <tr key={i} className="*:p-2">
                <td>
                  <div className="w-24 truncate">{tender?._id}</div>{" "}
                </td>
                <td>
                  <Link
                    to={`/admin/bids/${tender._id}`}
                    className="text-blue-700 underline"
                  >
                    {tender.name}
                  </Link>
                </td>
                <td>{tender.description}</td>
                <td>{formateDate(tender.startTime)}</td>
                <td>{formateDate(tender.endTime)}</td>
                <td>{tender.bufferTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenderList;
