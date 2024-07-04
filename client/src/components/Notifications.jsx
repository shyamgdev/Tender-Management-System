// src/components/Notification.js
import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

const Notification = () => {
  const socket = useMemo(() => io("http://localhost:3000"), []); // Adjust the URL if needed
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      setMessage(message);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return <div className="notification">{message && <p>{message}</p>}</div>;
};

export default Notification;
