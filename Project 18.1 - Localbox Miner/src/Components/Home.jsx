import React from "react";

const Home = ({ theme }) => {
  const isLightTheme = theme === "light";

  return (
    <div
      className={`d-flex justify-content-center align-items-center vh-100 ${
        isLightTheme ? "bg-light" : "bg-dark"
      }`}
      style={{
        padding: "20px",
        transition: "background 0.3s ease",
      }}
    >
      <div
        className={`card ${isLightTheme ? "bg-white" : "bg-secondary"} text-${
          isLightTheme ? "dark" : "light"
        }`}
        style={{
          maxWidth: "600px",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: isLightTheme
            ? "0 4px 10px rgba(0, 0, 0, 0.1)"
            : "0 4px 10px rgba(255, 255, 255, 0.1)",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        <h1 className="h4 mb-3">Welcome to My Projects</h1>

        <p className="mb-0">
          Explore my projects showcasing my ability to create dynamic web
          applications using React hooks like <b>useState</b>, <b>useRef</b>,
          and <b>useEffect</b> for efficient state management and conditional
          rendering.
        </p>
      </div>
    </div>
  );
};

export default Home;
