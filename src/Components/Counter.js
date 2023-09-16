import React,{useState} from 'react';


const Counter=()=>{
    let [counter,setCounter]=useState(0)
    function increse(){
        setCounter(counter+1);
    }
    function decrese(){
        setCounter(counter-1);
    }
    function intial(){
        setCounter(0);
    }
    return(
        <div>
            <h1>Counter APP</h1>
            <h2>the value of count is {counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>Increse</button>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button>
            <button onClick={()=>setCounter(0)}>Intial</button>
            {/* <button onClick={increse}>Increse</button>
            <button onClick={decrese}>Decrease</button>
            <button onClick={intial}>Intial</button> */}


        </div>
    )
}

export default Counter;