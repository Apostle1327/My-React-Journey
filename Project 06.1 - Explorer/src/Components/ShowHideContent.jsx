// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ShowHideContent() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <h4>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, amet ?
      </h4>

      {visible && (
        <p>
          answer : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat in est unde non dolor ipsa temporibus illo, inventore
          perferendis porro tenetur blanditiis quasi fugiat eligendi explicabo
          cumque excepturi exercitationem sunt! Tempora culpa accusamus quas
          dolor nisi! Debitis consectetur in suscipit delectus aliquam omnis
          molestiae molestias, harum quae tempora dolor neque.
        </p>
      )}

      <button
        type="button"
        onClick={() => setVisible(!visible)}
        style={{ padding: "5px 10px", borderRadius: "40px" }}
      >
        Reveal
      </button>
    </>
  );
}

export default ShowHideContent;
