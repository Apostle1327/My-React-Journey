// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function HandleHeading() {
  const [change, setChange] = useState(true);

  return (
    <>
      <h1>{change ? "Heading No. 1" : "Heading No. 2"}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni numquam
        natus nesciunt ipsa magnam. Unde, dolores! Et temporibus architecto
        repudiandae, laudantium quibusdam laborum eligendi illum voluptas, unde
        nesciunt recusandae eaque.
      </p>

      <button
        type="button"
        onClick={() => {
          setChange(!change);
        }}
        style={{ padding: "5px 10px", borderRadius: "40px" }}
      >
        Transform
      </button>
    </>
  );
}

export default HandleHeading;
