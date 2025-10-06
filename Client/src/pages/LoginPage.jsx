import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {
  const [currentState, setcurrentState] = useState('Sign up');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>

      {/* left */}
      <img src={assets.logo_big} className='w-[min(30vw,250px)]' alt="" />
      {/* right */}
      <from className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
        <h2 className='flex font-medium text-2xl justify-between items-center'>
          {currentState}
          <img src={assets.arrow_icon} alt="" className='cursor-pointer w-5' />
        </h2>

        {currentState === 'Sign up' && !isDataSubmitted && (
          <input onChange={(e)=>{setFullName(e.target.value)}} value={fullName} type="text" className='p-2 border border-gray-500 rounded-md focus:outline-none' placeholder='Full Name' required />
        )}

        {!isDataSubmitted && (
          <> 
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2  focus:ring-indigo-500' placeholder='Email' required />

            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2  focus:ring-indigo-500' placeholder='Password' required />
          </>
        )} 

        {currentState === 'Sign up' && isDataSubmitted && (
          <textarea onChange={e=>{setBio(e.target.value)}} value={bio} rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2  focus:ring-indigo-500' placeholder='Provide a short bio...'></textarea>
        )}

        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
          {currentState === 'Sign up'? 'Create Account': 'Login'}
          </button>

          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy</p>
          </div>

          <div className='flex flex-col gap-2'>
            {/* {currentState === ''} */}
            {/* 1:46 */}
          </div>

      </from>

    </div>
  )
}

export default LoginPage
