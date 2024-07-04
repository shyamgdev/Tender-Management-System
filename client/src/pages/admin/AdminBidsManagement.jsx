import Bids from "../../components/Bids";
import { useParams } from "react-router-dom";

function AdminBidsManagement() {
  const { id } = useParams();
  return <Bids tenderId={id} />;
}

export default AdminBidsManagement;
