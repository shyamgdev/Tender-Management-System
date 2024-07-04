const BidList = ({ tenderId }) => {
  // Assume you fetch bids based on the tenderId
  const bids = [
    { companyName: 'Company A', bidTime: '2023-12-01 10:00', bidCost: 1000 },
    { companyName: 'Company B', bidTime: '2023-12-01 11:00', bidCost: 1200 }
  ];

  return (
    <div>
      <h3>Bids</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Bid Time</th>
            <th>Bid Cost</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid, index) => (
            <tr key={index}>
              <td>{bid.companyName}</td>
              <td>{bid.bidTime}</td>
              <td>{bid.bidCost}</td>
              <td>{/* Logic to flag if bid was placed in the last 5 minutes */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidList;
