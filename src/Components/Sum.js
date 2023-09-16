import React,{useState} from 'react';
  let a=10;
console.log("i am outside the component")
const Sum=()=>{
   
    console.log("i am inside the component1")

    // let a=10;
    function increment(){
        a=a+1;
        console.log("the value of a is ",a)
        return a;
    }

    let [count,setCount]=useState(0)
    function incrementCount(){
        setCount(count+1);
        
    }
    console.log("i am inside the component2")

    return(
        <div>
            <div>
                <h1>The value of Count is{count}</h1>
                <button onClick={incrementCount}>Increment</button>

            </div>
      
        
            <div>
                <h1>the value of a is {a}</h1>
                <button onClick={increment}>IncrementA</button>

            </div>
        </div>
    )


}

export default Sum;