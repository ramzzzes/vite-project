import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import News from "./News"
import DynamicComponent from "./DynamicComponent" 

function App() {

  // const URL = '/'

  // if(URL === '/'){
  //   return <Home/>
  // }else if (URL === '/about'){
  //   return <About/>
  // }else{
  //   return <DynamicComponent/>
  // }



  return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="news/:id/:name" element={<News />} />
      <Route path="*" element={<DynamicComponent />} />
  </Routes>
     
}

export default App
