import {Routes,Route} from 'react-router-dom'
import Home from "./vistas/Home.jsx"
import Login from './vistas/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Contactenos from './vistas/Contactenos.jsx'
import './App.css'

 
function App() { 

  return (
    <>
    <Navbar></Navbar>
    <Routes> 
      <Route  path="/" element={<Home/>}> </Route> 
      <Route  path="/login" element={<Login/>}> </Route>
      <Route  path="/contactenos" element={<Contactenos/>}> </Route> 
    </Routes>
    </>
  )
}

export default App;
