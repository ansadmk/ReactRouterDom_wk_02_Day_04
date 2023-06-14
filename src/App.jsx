
import { Route,Routes } from "react-router-dom"
import Home from './Homepage'
import Login from './Loginpage'
import Regi from './Registrationpage'

function App() {
  

  return (
    
      <Routes>
        <Route path="/" element={<Regi/>}/>
        <Route path="/second" element={<Login/>}/>
        <Route path="/third" element={<Home/>}/>

      </Routes>
    
  )
}

export default App
