import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import News from "./News"
import DynamicComponent from "./DynamicComponent" 
import First from "./First"
import { useState } from "react"
import { UserContext } from "./Context/UserContext"
import Second from "./Second"
import { useDispatch, useSelector } from "react-redux"

function App() {

  // const {name,setName} = useContext(UserContext)
  // setName('Giorgi')
  
  
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()


  // const dispatch = (object) => {
  //   const object = {type : "INCREMENT",payload : 10}
      //  const number + 

  //   if(object.type === 'DECREMENT'){

  //   }
  // }

  return (
    <>
        <button onClick={() => dispatch({type : "SET",payload : 'Davit',})}> set Davit </button>
        <button onClick={() => dispatch({type : "SET",payload : 'GIORGI'})}> set Giorgi</button>


        changes after 1 month
        <br />
        {counter} From App.jsx
        <br />
        <First/>
    </>

);


  // const [name,setName] = useState('Giorgi')
  // const [lastname,setLastname] = useState('Ramazashvili')
  // const [country,setCountry] = useState('Georgia')
  // const [color,setColor] = useState('')

  // return <UserContext.Provider value={{
  //     name,
  //     setName,
  //     lastname,
  //     setLastname,
  //     setCountry,
  //     country,
  //   }}>
  //     {lastname} from App.jsx
  //     <br/>
  //     <First />
  // </UserContext.Provider>
}

export default App
