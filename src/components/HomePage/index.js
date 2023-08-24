import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/counterSlice";
import { decrement2, increment2 } from "../../store/slices/counter2";

const HomePage = () => {
  const count = useSelector((state) => state.counter.value);
  const count2 = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>HomePage</h1>

      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <p>------------------------</p>

      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment2())}
        >
          Increment
        </button>
        <span>{count2}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement2())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HomePage;
