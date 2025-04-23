import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>A Basic Counter: {count}</h1>

      <button
        id="plus-button"
        type="button"
        onClick={() => setCount(count + 1)}
      ></button>

      <button
        id="minus-button"
        type="button"
        onClick={() => count > 0 && setCount(count - 1)}
        disabled={count === 0}
      ></button>

      <button id="reset-button" type="button" onClick={() => setCount(0)}>
        &#x21bb;
      </button>
    </>
  );
}

export default App;
