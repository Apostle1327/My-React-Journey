// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  return (
    <>
      <h1 style={{ fontFamily: "mono sans-serif" }}>Manual Counter</h1>

      <span style={{ fontSize: "20px" }}>Counter : {counter}</span>
      <br />
      <button
        type="button"
        onClick={increment}
        style={{ padding: "5px 10px", borderRadius: "40px", marginTop: "10px" }}
      >
        Increment
      </button>

      <button
        type="button"
        onClick={decrement}
        style={{ marginLeft: "5px", padding: "5px 10px", borderRadius: "40px" }}
      >
        Decrement
      </button>

      <button
        type="button"
        onClick={reset}
        style={{ marginLeft: "5px", padding: "5px 10px", borderRadius: "40px" }}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
