// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function MouseEvents() {
  const [textColor, setTextColor] = useState("lightBlue");
  const handleMouseOver = () => {
    setTextColor("gold");
  };
  const handleMouseOut = () => {
    setTextColor("azure");
  };
  return (
    <>
      <p
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ color: textColor }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam
        corporis fugiat facere eum dolores et sit eos delectus, perferendis
        illum repudiandae itaque rem praesentium aut maxime consectetur
        necessitatibus labore excepturi. Atque dolorem odit ea libero accusamus
        excepturi similique! Deleniti enim praesentium facilis, iste quae odio
        nulla culpa sed eveniet.
      </p>
    </>
  );
}

export default MouseEvents;
