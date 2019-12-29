import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../modules";
import { increment, decrement } from "../../modules/counter/actions";

const counterSelector = (state: State) => state.counter;

const Counter: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(counterSelector);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(1))}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};

export default Counter;
