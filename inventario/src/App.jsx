import {Routes,Route} from 'react-router-dom'
import Home from "./vistas/home.jsx"
import './App.css'


function App() {

  return (
    <>
    <Routes> 
      <Route  path="/" element={<Home/>}> </Route> 
    </Routes>
    </>
  )
}

export default App;
