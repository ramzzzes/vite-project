import {useCallback, useEffect, useMemo, useState} from "react";
import Child from "./components/Child.jsx";

// const funccount = new Set();

function App() {

    // const [counterOne,setCounterOne] = useState(0)
    // const [counterTwo,setCounterTwo] = useState(0)
    //
    //
    // const incrementOne = () => {
    //     setCounterOne(counterOne + 1)
    // }
    //
    // const incrementTwo = () => {
    //     setCounterTwo(counterTwo + 1)
    // }
    //
    //
    // const slowFunction = () => {
    //     console.log('calling slow function')
    //     for (let i=0; i<=2000000000;i++){}
    //     return counterOne
    // }


    // const slowFunction = useMemo(() => {
    //     console.log('calling slow function')
    //     for (let i=0; i<=2000000000;i++){}
    //     return counterOne
    // },[])

    // return (
    //     <div>
    //         <div>
    //             <button onClick={incrementOne}>counter one - {counterOne}</button>
    //         </div>
    //         <div>
    //             <button onClick={incrementTwo}>count two {counterTwo}</button>
    //         </div>
    //         {slowFunction()}
    //     </div>
    // )
    //
    // const [count, setCount] = useState(0)
    // const [otherCounter, setOtherCounter] = useState(0)
    // const [thirdCounter, setThirdCounter] = useState(0)
    //
    // const incrementCounter = useCallback (() => { // useCallback
    //     setCount(count + 1)
    // },[count])
    //
    // const incrementOtherCounter = useCallback (() => { // useCallback
    //     setOtherCounter(otherCounter + 1)
    // },[otherCounter])
    //
    // const incrementThirdCounter = useCallback (() => { // useCallback
    //     setThirdCounter(thirdCounter + 1)
    // },[thirdCounter])
    //
    //
    // funccount.add(incrementCounter);
    // funccount.add(incrementOtherCounter);
    // funccount.add(incrementThirdCounter);

    // return (
    //     <div>
    //         Count: {count}
    //         <br/>
    //         other number: {otherCounter}
    //         <br/>
    //         <button onClick={incrementCounter}>
    //             Increase counter
    //         </button>
    //         <br/>
    //         <button onClick={incrementOtherCounter}>
    //             increase other number
    //         </button>
    //         <br/>
    //         <br/>
    //         <button onClick={incrementThirdCounter}>
    //             increase other number
    //         </button>
    //         <br/>
    //         <br/>
    //         function list size {funccount.size}
    //     </div>
    // )


    // let number = 10
    // function setNumber = (param) => {
    //     number = param
    // }

  // const [first,setFirst] = useState(10);
  // const [second,setSecond] = useState(100);
  // const [first,setFirst] = useState(10);
  // const [src,setSrc] = useState('https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg');

   //
   // useEffect(() => {
   //      console.log('any State changed')
   // },[first])
   //
   //
   //  useEffect(() => {
   //      console.log('second State changed')
   // },[second])

    // const handleClick = () => {
    //     alert(`Count is ${count}`);
    // };




  // return <>
      {/*First Value : {first}*/}
      {/*<br/>*/}
      {/*Second Value : {second}*/}
      {/*<br/>*/}
      {/*<img src={src} width={300} alt=""/>*/}
      {/*<button onClick={() => setSrc('https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png')}>Change Photo</button>*/}
      {/*<br/>*/}
      {/*<button onClick={() => setFirst(first + 10)}>Set String</button>*/}
      {/*<br/>*/}
      {/*<button onClick={() => setSecond(second + 100)}>Set String</button>*/}
      {/*  <button onClick={() => change()}>change </button>*/}
      {/*<Child*/}
      {/*number={number}*/}
      {/*setNumber={setNumber}*/}
      {/*/>*/}
  // </>
}

export default App
