// import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
    ForgotPassword,
    Login,
    Register
} from "./components/Authorization/Auth";

function App() {

  let mainText = 'This is main text'
  let a = 5;
  let b = 10;
  // let secondText = 'This is second text'

  return  <>
      <Header
          a={a}
          b={b}
          mainText={mainText}
          secondText={'This is second text'}
          thirdText={'This is third text'}
          fourthText={'This is fourth text'}
      />
      <Login/>
      <Register/>
      <ForgotPassword/>
      Content
      <Footer/>
  </>
}

export default App
