import React from "react";

const Aside = () => {
  return (
    <>
      <aside>
        <h2>Average</h2>
        <h3>Ranking</h3>
        <input type="range" min={0} max={5} />
      </aside>
    </>
  );
};

export default Aside;
