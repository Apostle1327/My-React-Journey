// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";

function InputDetection() {
  const [text, setText] = useState("");
  return (
    <>
      <input
        style={{ padding: "5px 10px", borderRadius: "40px" }}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <p style={{ marginTop: "10px" }}>Detected Text : {text}</p>
    </>
  );
}

export default InputDetection;
