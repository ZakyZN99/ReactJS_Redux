import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "./counterFeatures/action";

export const Counter = () => {

    let {count}  = useSelector(state => state.counter)
    const dispatch = useDispatch();

  return (
    <div className="App">

      <button onClick={() => dispatch(decrementWithCheckingAction(1))}> - </button> 
      {' '}<span>{count}</span> {' '}
       <button onClick={() => dispatch((increment(1)))}> + </button>
    </div>
  );
};
