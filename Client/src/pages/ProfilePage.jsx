import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const ProfilePage = () => {

  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();;
  const [name, setName] = useState('Martin Jhonson');
  const [bio, setBio] = useState('Hi Everyone, I am Using QuickChat');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-cover bg-no-repeat '>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-center max-sm:flex-col-reverse rounded-lg'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg'>Profile Details</h3>
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input onChange={(e)=>{setSelectedImg(e.target.files[0])}} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="" className={`w-12 h-12 ${selectedImg && 'rounded-full'}`} />
            Upload Profile Image
          </label>
          <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" required placeholder='Your Name' className='p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500' />
          <textarea onChange={(e)=>{setBio(e.target.value)}} value={bio} placeholder='write profile bio' required className='p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500' rows={3}></textarea>
          <button type='submit' className='bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-lg py-2 rounded-full cursor-pointer'>Save</button>
        </form>
        <img src={assets.logo_icon} className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' alt="" />
      </div>

    </div>
  )
}

export default ProfilePage
