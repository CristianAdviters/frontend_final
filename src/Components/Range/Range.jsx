import React from "react";

const Range = () => {
  return (
    <>
      <h2>Average</h2>
      <aside>
        <h3>Ranking</h3>
        <input type="range" min={0} max={5} />
      </aside>
    </>
  );
};

export default Range;
