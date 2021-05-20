import React, { useState, useEffect } from "react";
function Example() {
  const [state, setState] = useState(0);
  useEffect(() => {
    document.title = `${state}`;
  });
  return (
    <div>
      <p>you click {state} time</p>
      <button onClick={() => setState(state + 1)}></button>
    </div>
  );
}
export default Example;
