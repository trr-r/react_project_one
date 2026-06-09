import React from "react";
import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(10);
  function plus() {
    setNum(num + 1);
  }
  function minus() {
    setNum(num - 1);
  }
  return (
    <div>
      <p>{num}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
