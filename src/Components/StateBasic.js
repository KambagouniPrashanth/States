import React,{useState} from 'react';

// let a=10; 
const StateBasic=()=>{
    let a=10;
    function increment(){
        let a=10;//every time intialized to 10
        a=a+1;
        console.log("the value of a is",a)
      
    }



    const [count,setCount]=useState(27);
    function incrementCount(){
        setCount(count+1);
    }

    return(
        <div>
        <h1>Value of a {a}</h1>
        <button onClick={increment}>Incremnet</button>
        <h1>Value of count {count}</h1>
        <button onClick={incrementCount}>Incremnet</button>
        {/* after this button is clicked entire is restarted */}

        
        

    </div>
    )

    
}

export default StateBasic;