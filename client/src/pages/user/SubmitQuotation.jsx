import { useState } from "react";

const SubmitQuotation = ({ tenderId }) => {
  const [quotation, setQuotation] = useState({
    companyName: "",
    bidCost: "",
  });

  const handleChange = (e) => {
    setQuotation({ ...quotation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the quotation
    setQuotation({ companyName: "", bidCost: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          className="form-control"
          name="companyName"
          value={quotation.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Bid Cost</label>
        <input
          type="number"
          className="form-control"
          name="bidCost"
          value={quotation.bidCost}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Quotation
      </button>
    </form>
  );
};

export default SubmitQuotation;
