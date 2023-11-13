import './Login.css'
import { useState } from 'react';
import axios, { Axios } from 'axios';



function Login(){

  const [password,setPassword]=useState('')
  const [correo,setCorreo]=useState('')

  const getcorreo = (evt) => {
    setCorreo(evt.target.value);
    console.log(correo);
   }
   const getpassword = (evt) => {
    setPassword(evt.target.value);
    console.log(password);
   }

  const handLeRegister = (evt)=> {
    evt.preventDefaul();

    axios({
        url: "http://localhost:3000/users/login",
        method: "POST",
        data:{
          correo: correo,
          password:  password
        }
    }).then((response)=> {
         console.log(response);
    }).catch((error)=>{console.log(error)})
  }

 return (
   <div classname = "Login">
        <div className="max-w-md w-full p-4 space-y-4 bg-white rounded shadow-lg">
          <h2 className="text-2x1 font-semibold"> Registrate</h2>
           <form  onSubmit={handLeRegister}>
            <div>
             <label htmlfor = "email" className = "block text-sm font-medium text-gray-700">
               correo electronico
             </label>
             <input 
               onChange={getcorreo}
               type="email"
               id="email"
               name="email"
               className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-400"   
            />
            </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text.gray-700">
            Contraseña
          </label>
          <input
               onChange={getPassword}
               type="password"
               id="password"
               name="password"
               className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-400"   
            />
        </div>
        <button 
         type="submit"
         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Registrarse
        </button>
      </form>
      </div>
       </div>
 );
}

export default Login;  