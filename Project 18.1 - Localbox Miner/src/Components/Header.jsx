import React, { Fragment } from "react";

function Header({ activeTab, setActiveTab, theme }) {
  const navListItem = [
    { id: "home", label: "Home" },
    { id: "clock", label: "Clock" },
    { id: "counter", label: "Counter" },
    { id: "fruits", label: "Fruit List" },
    { id: "todos", label: "To-do-List" },
    { id: "profile", label: "User Profiles" },
  ];

  return (
    <Fragment>
      <header
        className={`sticky-top d-flex flex-wrap justify-content-between align-items-center border-bottom ${
          theme === "light" ? "bg-white" : "bg-black"
        }`}
        style={{
          zIndex: 10,
          borderColor: theme === "light" ? "#ddd" : "#444",
        }}
      >
        <div className="px-3 py-2">
          <span className="fs-4 fw-bold">Projects</span>
        </div>

        <nav>
          <ul className="nav px-3 py-2">
            {navListItem.map((item) => (
              <li
                key={item.id}
                className={`nav-item`}
                style={{ listStyle: "none" }}
              >
                <button
                  className={`btn mx-2 ${
                    activeTab === item.id
                      ? "btn-secondary text-white"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
