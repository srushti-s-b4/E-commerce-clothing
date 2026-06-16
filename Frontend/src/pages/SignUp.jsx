import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'

const SignUp = () => {
    let [state,setstate]=useState({firstname:"",lastname:"",email:"",password:"",confirmpassword:""})
    let {firstname,lastname,email,password,confirmpassword}=state
    let handlechange=(e)=>{
    setstate({...state,[e.target.name]:e.target.value})
  }
  let handlesubmit=async(e)=>{
    e.preventDefault()
    if(firstname==="" || lastname==="" || email==="" || password==="" || confirmpassword===""){
      return toast.error("All fields are mandatory")
    }
    try{
      let res= await fetch("http://localhost:3000/api/signup",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(state)
    })
    toast.success(`${email} has been successfully registered`)
    }
    catch(err){
      toast.error("Something went wrong")
    }
  }
  return (
   <div className='h-[90vh] w-[100vw] flex justify-center items-center bg-gray-400'>
      <form action="/login" className='h-[80vh] w-[50vw] border-2 flex flex-col justify-center items-center gap-3.5 rounded-2xl bg-mist-300' onSubmit={handlesubmit}>
        <div >
          <label htmlFor="fname" className='flex  '>First Name :</label>
          <input type="text" id="fname" placeholder='Enter your first name' className='border-1' value={firstname} onChange={handlechange} name='firstname'/>
        </div>
        <div>
          <label htmlFor="lname" className='flex'>Last Name :</label>
          <input type="text" id="lname" placeholder='Enter your last name' className='border-1' value={lastname} onChange={handlechange} name='lastname'/>
        </div>
        <div>
          <label htmlFor="email" className='flex'>Email :</label>
          <input type="email" id="email" placeholder='Enter your email' className='border-1' value={email} onChange={handlechange} name='email'/>
        </div>
        <div>
          <label htmlFor="pass" className='flex'>Password :</label>
          <input type="password" id='pass' placeholder='Enter password' className='border-1' value={password} onChange={handlechange} name='password'/>
        </div>
        <div>
          <label htmlFor="cpass" className='flex'>Confirm Password :</label>
          <input type="password"  id="cpass" placeholder='Enter same Password' className='border-1' value={confirmpassword} onChange={handlechange} name='confirmpassword'/>
        </div>
        <div className='flex gap-8'>
          <div >
            <NavLink to="/login" className='hover:text-stone-600'>Already Have An Account?</NavLink>
          </div>
          <div>
            <button className='h-[7vh] w-[15vw] bg-slate-950 text-cyan-50 rounded-2xl hover:bg-mist-600'>SignUp</button>
          </div>
        </div>
      </form>
      <Toaster/>
    </div>
  )
}

export default SignUp