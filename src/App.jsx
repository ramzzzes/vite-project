import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';

// import './App.css'
// import './Styles.scss'

// const funccount = new Set();

function App() {

    
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errors,setErrors] = useState('')
  const [user,setUser] = useState({})
  const [disabled,setDisabled] = useState(true)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  useEffect(() => {

    if(email.length == 0){
      setDisabled(true)
    }else{
      setDisabled(false)
    }

    if(password.length == 0){
      setDisabled(true)
    }else{
      setDisabled(false)
    }

  },[email,password])

    const submitHandler = async (e) => {
        try {
            e.preventDefault()
            setErrors('')

            if(!validateEmail(email)){
              setErrors('Email format is invalid')
              return
            }

            if(email.length == 0){
              setErrors('Email field is required')
              // setTimeout(() => {
              //   setErrors('')
              // },2000)
              return
            }

            if(password.length == 0){
              setErrors('Password field is required')
              return
            }


            const response = await axios.post(
                'https://accounts.tnet.ge/api/ka/user/auth',
                {
                    Email: email,
                    Password : password
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                })

              setUser(response.data.data.Data)


        }catch (e){
          const errorText = e.response.data.message.error
          setErrors(errorText)
            // const errorCode = e.response.status;

            // if(errorCode === 404){
            //   alert('User not Found')
            // }

            // if(errorCode === 422){
            //   alert('User data is invalid')
            // }
        }
    }

  return <>
  {/* {user.user_name} */}
    {user.user_name ? <div>welcome {user.user_name}</div> :  <form action="" method="POST" onSubmit={submitHandler}>
          <br/>
          <input type="text" placeholder="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <br />
          <input type="password" placeholder="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" disabled={disabled}>Save</button>
          <br/>
          <p style={{color:'red'}}>{errors}</p>
      </form>}
  </>


//   const NormalTag = styled.div`
//   color: green;
//   font-size: 24px;
// `;

  // return <> 
  //   <GoodTag size={'32px'}>
  //     text 2 
  //   </GoodTag>
  //   <GoodTag color='green' size={'12px'}>
  //     text 2 
  //   </GoodTag>
    
  // </>
  // const [fontSize,setFontSize] = useState(16)

  // const handleFontSize = (e) => {
  //   setFontSize(e.target.value)
  // }

  // return <>
  //   <div className='text'   >
  //     text
  //     <p className="pLabel">
  //       p text
  //     </p>
  //   </div>
  //   <div className="label">
  //   label
  //   </div>
  // </>
  {/* <input type="text" onChange={handleFontSize} /> */}
  
  // const styles = {
  //   color:"red",
  //   "font-size" : "32%",
  //   // fontSize : 32,
  //   // fontFamily : "Arial"
  //   // "font-size" : 32
  // }

  // return <div style={styles}>
  //   this is text
  // </div>
  

 
  // const [movies,setMovies] = useState([])
  // const [error,setError] = useState('')
 

  //  function fetchMovies(){
  //      fetch('https://swapi.dev/api/films/')
  //          .then(response => { 
  //              return response.json()
  //          })
  //          .then(data => {
  //           console.log(data.results)
  //           setMovies(data.results)

  //          })
  //          .catch()
  //  }


  // async function fetchMovies(){

  //   try {
  //     setError('')
  //     const response = await axios.get('https://swapi.dev/api/films/')
  //     setMovies(response.data.results)
  //   } catch (error) {
  //     setError('Try again later')
  //     // console.log(error.response.data);
  //   }

   
  // }

  //  useEffect(() => {
  //      fetchMovies()
  //  },[])


  //  if(error.length > 0){
  //   return <div style={{color:'red'}}>{error}</div>
  //  }else{
  //   return movies.map(movie => (
  //     <div key={movie.title}>{movie.title}</div>
  //    ))
  //  }

  //  return error.length > 0 ? <div style={{color:'red'}}>{error}</div> : movies.map(movie => (
  //   <div key={movie.title}>{movie.title}</div>
  //  ))
    
    
    



 
  // const [name,setName] = useState('')
  // const inputRef = useRef()
  // const triggerRef = useRef()

  // const focus = () => {
  //   triggerRef.current.click()
  // }

  // const trigger = () => {
  //   alert('triggered')
  // }

  // return (
  //     <>
  //         <input  ref={inputRef} type="text" onChange={e => setName(e.target.value)} value={name} />
  //         <button onClick={focus}>first button</button>

  //         <button ref={triggerRef} onClick={trigger}>Trigger</button>
  //     </>
  // );

  // return

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
