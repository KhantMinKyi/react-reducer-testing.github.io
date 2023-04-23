import React,{useReducer} from "react";

const countReducer = (preState,act)=>{
  switch(act.type){
    default:
      return{
        count:preState.count,
        isOdd: preState.count%2 ? false : true,
      }
    case "REDUCE":
      return{
        count: preState.count -1 ,
        isOdd: preState.count%2 ? false : true,
      }
    case "INCRESE":
      return{
        count: preState.count +1 ,
        isOdd: preState.count%2 ? false : true,
      }
  }
}

function App() {

  const[state,dispatch]=useReducer(countReducer,{
    count:0,
    isOdd:false,
  })
  return (
    <div className="text-center mt-4">
      <h4>{state.count}</h4>
      <span className="text-danger text-sm">
      {
        state.isOdd ? "Odd Number" : "Even Number"
      }
      </span>
      <div>
      <button onClick={()=>dispatch({type:"REDUCE"})} className="btn btn-sm btn-danger m-2">-</button>
      <button onClick={()=>dispatch({type:"INCRESE"})} className=" btn btn-sm btn-success m-2">+</button>
      </div>
    </div>
  );
}

export default App;
