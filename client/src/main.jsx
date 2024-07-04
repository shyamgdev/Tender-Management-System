import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App.jsx";
import axios from 'axios';

// Set default base URL
axios.defaults.baseURL = 'http://localhost:3000/api';

const options = {
  timeout: 7000,
  position: positions.TOP_CENTER,
  transitions: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </BrowserRouter>
);
