import React, { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT' :
      return {value: state.value + 1};
    case 'DECREMENT' :
      return {value: state.value - 1};
    default:
      return state;
  }
}

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, {value:0});
  return (
    <div>
      <p>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
    </div>

    // <div>
    //   <p>현재 카운터 값은 <b>{value}</b></p>
    //   <button onClick={()=>setValue(value+1)}>+1</button>
    //   <button onClick={()=>setValue(value-1)}>-1</button>
    // </div>
  );
};

export default Counter;