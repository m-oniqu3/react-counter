import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Counter : {count} </h1>
      <div className="btn">
        <button onClick={increase}>Increase +</button>
        <button onClick={decrease}>Decrease -</button>
      </div>
    </div>
  );
};

export default Counter;
