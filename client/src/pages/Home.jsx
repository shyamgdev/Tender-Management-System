import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <header className="py-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to the Tender Management System
        </h1>
        <p className="pt-4 text-lg text-gray-600">
          Efficiently manage and bid on tenders with ease.
        </p>
      </header>
      <div className="pt-5 flex flex-row items-center">
        <div
          className="w-full max-w-md cursor-pointer text-center text-2xl"
          onClick={() => navigate("/admin")}
        >
          Admin View
          <img
            src="/admin.avif"
            alt="Admin"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div
          className="w-full max-w-md cursor-pointer text-center text-xl"
          onClick={() => navigate("/user")}
        >
          User View
          <img
            src="/user-profile.png"
            alt="User"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
