import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
useState
const Login = () => {
    const navigate=useNavigate();
    const[login,setLogin]=useState({
        email:'',
        password:''
})

let{email,password}=login;
const handleChange=(e)=>{
    let{name,value}=e.target
    setLogin(
        {...login,[name]:value}
    )
}

console.log(localStorage.getItem("register"));
let data=JSON.parse(localStorage.getItem("register"))
// let result=JSON.parse(data)
// console.log(data);

let{email:lemail,password:lpass}=data

// console.log(lemail,lpass);


const handleLogin=  (e)=>{
    e.preventDefault();

    if(lemail===email && lpass===password){
        navigate("/personalinfo")
        toast.success("Login Successful")
    } else{
        toast.error("Invalid Email or Password")
    }

}
return (
<>
<div className=' border-3  h-156'>
<div className='absolute bottom-55 left-160  top-40 border-6 w-70 h-100 pt-10 pl-10 rounded-xl border-red-500 ' >
    <h1 className='text-[25px] '>User Login</h1> <br/>
  <form  onSubmit={handleLogin}>
   

    <input type="text" name='email'   placeholder='Enter Your Email' value={email} onChange={handleChange}   className='rounded-md border-b-2 w-50' /><br/><br/>
    
    <input type="text" name='password'  placeholder='Enter Your Password' value={password}  onChange={handleChange}  className='rounded-md border-b-2 w-50' /><br/><br/>
    
    <button type='submit' onClick={handleLogin}>Login</button>
    
  </form>
</div>
</div>
</>
)
}

export default Login
