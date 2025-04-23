import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Clock from "./Clock";
import Counter from "./Counter";
import FruitList from "./FruitList";
import ThemeToggler from "./ThemeToggler";
import ToDo from "./ToDo";
import UserProfiles from "./UserProfile";

const style = {
  light: {
    bgColor: "#ffffff",
    color: "#000000",
    margin: "10px",
    padding: "10px",
    card: "#a1b2c3",
    cursor: "pointer",
  },
  dark: {
    bgColor: "#000000",
    color: "#fff",
    margin: "10px",
    padding: "10px",
    card: "#3a3b3c",
    cursor: "pointer",
  },
};

const MainPage = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    document.body.style.backgroundColor = style[theme].bgColor;
    document.body.style.color = style[theme].color;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const setNewTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", setNewTheme);
      return setNewTheme;
    });
  };

  return (
    <div className="container py-4">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />

      <main className="mt-4">
        {activeTab === "home" && <Home theme={theme} />}
        {activeTab === "clock" && <Clock theme={theme} />}
        {activeTab === "counter" && <Counter theme={theme} />}
        {activeTab === "fruits" && <FruitList theme={theme} />}
        {activeTab === "todos" && <ToDo theme={theme} />}
        {activeTab === "profile" && <UserProfiles theme={theme} />}
      </main>

      <div className="fixed-bottom mb-3 d-flex justify-content-center">
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default MainPage;
