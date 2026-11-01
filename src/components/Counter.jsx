import React from "react";
import { useState } from "react";

const Counter = ({start=0}) => {
  const [num, setNum] = useState(start);
  function plus() {
    setNum(num + 1);
  }
  function minus() {
    if(num<=0){
      return 0
    }
    else setNum(num - 1)
  }
  return (
    <div>
      <p id="text" >{num}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
