import React, { useState, useEffect, useRef } from "react";

const Clock = ({ theme }) => {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (data) => {
    let hours = data.getHours();
    const minutes = data.getMinutes().toString().padStart(2, "0");
    const seconds = data.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${hours}:${minutes}:${seconds} ${amPm}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const setGreeting = (hours) => {
    if (hours < 6) return "🌙 Good Night";
    if (hours < 12) return "☀️ Good Morning";
    if (hours < 17) return "⛅ Good Afternoon";
    return "🌙 Good Evening";
  };

  const isLightTheme = theme === "light";

  const containerStyle = {
    height: "100vh",
    backgroundColor: isLightTheme ? "#f3f4f6" : "#121212",
    transition: "background 0.3s ease",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={containerStyle}
    >
      <div
        className={`text-center p-5 rounded shadow ${
          isLightTheme ? "bg-white text-dark" : "bg-dark text-light"
        }`}
        style={{
          width: "95%",
          maxWidth: "700px",
          minHeight: "400px",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        <div className="mb-4" style={{ fontSize: "42px", fontWeight: "bold" }}>
          {setGreeting(time.getHours())}
        </div>

        <div
          className="mb-4"
          style={{ fontSize: "64px", fontWeight: "bold", letterSpacing: "2px" }}
        >
          {formatTime(time)}
        </div>

        <div className="opacity-75" style={{ fontSize: "28px" }}>
          {formatDate(time)}
        </div>
      </div>
    </div>
  );
};

export default Clock;
