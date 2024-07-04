import { useState } from "react";
import { createTender } from "../../api/tenderService";
import { useAlert } from "react-alert";

const CreateTender = ({ tenders, setTenders, addTender }) => {
  const alert = useAlert();
  const [tenderData, setTenderData] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    bufferTime: "",
  });

  const handleChange = (e) => {
    setTenderData({ ...tenderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTender = await createTender(tenderData);
      alert.success("Tender Created Successfully")
      setTenders([...tenders, newTender]);
    } catch (error) {
      console.error("Error creating tender", error.message);
      alert.error("Error creating tender", error.message)
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-2 text-2xl font-bold">Create Tender</h2>
      <form
        onSubmit={handleSubmit}
        className=" p-2 space-y-2 bg-white rounded-lg shadow-md flex flex-col border divide-x *:p-4"
      >
        <input
          type="text"
          name="name"
          value={tenderData.name}
          onChange={handleChange}
          placeholder="Tender Name"
          required
        />
        <textarea
          name="description"
          value={tenderData.description}
          onChange={handleChange}
          placeholder="Tender Description"
          required
        />
        <input
          type="datetime-local"
          name="startTime"
          value={tenderData.startTime}
          onChange={handleChange}
          placeholder="Start Time"
          required
        />
        <input
          type="datetime-local"
          name="endTime"
          value={tenderData.endTime}
          onChange={handleChange}
          placeholder="End Time"
          required
        />
        <input
          type="number"
          name="bufferTime"
          value={tenderData.bufferTime}
          onChange={handleChange}
          placeholder="Buffer Time (minutes)"
        />
        <button type="submit" className="btn btn-primary">
          Create Tender
        </button>
      </form>
    </div>
  );
};

export default CreateTender;
