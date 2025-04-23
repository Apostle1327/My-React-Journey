import React, { useState, useEffect } from "react";

const Counter = ({ theme }) => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });
  const [autoIncrement, setAutoIncrement] = useState(() => {
    const savedAutoIncrement = localStorage.getItem("autoIncrement");
    return savedAutoIncrement ? JSON.parse(savedAutoIncrement) : false;
  });
  const [incrementValue, setIncrementValue] = useState(() => {
    const savedIncrementValue = localStorage.getItem("incrementValue");
    return savedIncrementValue ? parseInt(savedIncrementValue, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("autoIncrement", autoIncrement);
  }, [autoIncrement]);

  useEffect(() => {
    localStorage.setItem("incrementValue", incrementValue);
  }, [incrementValue]);

  useEffect(() => {
    let interval;
    if (autoIncrement) {
      interval = setInterval(
        () => setCount((prevCount) => prevCount + incrementValue),
        1000
      );
    }
    return () => clearInterval(interval);
  }, [autoIncrement, incrementValue]);

  const handleReset = () => {
    setCount(0);
    setAutoIncrement(false);
  };

  const isLightTheme = theme === "light";

  return (
    <div
      className={`d-flex justify-content-center align-items-center vh-100 ${
        isLightTheme ? "bg-light" : "bg-dark"
      }`}
    >
      <div
        className={`text-center p-4 rounded shadow ${
          isLightTheme ? "bg-white text-dark" : "bg-secondary text-light"
        } mx-auto w-100`}
        style={{ maxWidth: "600px" }}
      >
        <h2 className="mb-3 fw-bold">Counter</h2>

        <div className="display-1 fw-bold mb-3">{count}</div>

        <div className="mb-3">
          <label className="form-label">Increment Amount:</label>
          <input
            type="number"
            value={incrementValue}
            onChange={(e) => {
              const value = Math.max(1, Math.min(100, Number(e.target.value)));
              setIncrementValue(value);
            }}
            min="1"
            max="100"
            className={`form-control ${
              isLightTheme ? "bg-white text-dark" : "bg-dark text-light"
            }`}
          />
        </div>

        <div className="mb-3">
          <button
            onClick={() => setAutoIncrement(!autoIncrement)}
            className="btn btn-warning me-2"
          >
            {autoIncrement ? "Stop Auto" : "Start Auto"}
          </button>
        </div>

        <div>
          <button
            onClick={() => setCount(count - incrementValue)}
            className="btn btn-danger me-2"
          >
            -
          </button>

          <button onClick={handleReset} className="btn btn-primary me-2">
            Reset
          </button>

          <button
            onClick={() => setCount(count + incrementValue)}
            className="btn btn-success"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
