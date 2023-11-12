import {Routes,Route} from 'react-router-dom'
import Home from "./vistas/Home.jsx"
import Login from './vistas/Login.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes> 
      <Route  path="/" element={<Home/>}> </Route> 
      <Route  path="/login" element={<Login/>}> </Route> 
    </Routes>
    </>
  )
}

export default App;
