import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

import axios from 'axios';
// import { backendUrl } from './../../../admin/src/App';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState,setCurrentState] = useState("Sign Up")
  const {token,setToken,navigate} = useContext(ShopContext)
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const backendUrl = "http://localhost:4000"; // or use context

  const onSubmitHandler = async (event) => {
    console.log("backendUrl 👉", backendUrl)


    event.preventDefault()
    try {
      if(currentState === "Sign Up"){
        const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
     if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
     }else{
      toast.error(response.data.message)
     }


      }
      else{
        const respons = await axios.post(backendUrl + '/api/user/login',{email,password})
        if(respons.data.token){
          setToken(respons.data.token)
      localStorage.setItem("token",respons.data.token)

        }
        else{
          toast.error(respons.data.message)
        }
      }
      
    } 
      catch (error) {
  console.log("ERROR 👉", error.response?.data || error.message)
  toast.error(error.message)
}

      
    }

    useEffect(()=>{
      if(token){
        navigate("/")
      }
    })
  
  return (
   <form onSubmit={onSubmitHandler} action="" className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-13 text-gray-800 gap-4 '>
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr  className='border-none h-[1.5px] w-8 bg-gray-800'/>
    </div>
    {currentState === "Login" ? '' :    <input onChange={(e)=> setName(e.target.value)} value={name} type="text" name="" className='w-full px-3 border border-gray-800 ' placeholder='Name' id=""  required/>}
 
       <input type="email" name="" onChange={(e)=> setEmail(e.target.value)} value={email} className='w-full px-3 border border-gray-800 ' placeholder='email' id=""  required/>
          <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" name="" className='w-full px-3 border border-gray-800 ' placeholder='password' id="" required />
          <div className='w-full flex justify-between text-sm mt-[-8px]'>
            <p className='cursor-pointer'>Forgot your password</p>
            {
              currentState === "Login" ?
              <p  onClick={() => setCurrentState('sign Up')} className='cursor-pointer'>Create Account</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login here</p>
            }
          </div>
          <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign up'}</button>
   </form>
  )
}

export default Login