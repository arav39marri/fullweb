import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Delete = () => {

// https://fullweb-fpn2p46b6-aravinds-projects-7f57af90.vercel.app
  const navigate = useNavigate();
  const [username, setUserName] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete('https://fullweb-db.vercel.app/delete', {
        data: { username } 
      });
      alert("User deleted successfully");
      navigate('/');
    } catch (error) {
      console.error(error);
      alert("user not found");
    }
  }

  return (
    <div className='h-screen w-full bg-[#766ce1] flex pt-10 justify-center  overflow-auto'>
      <div className='gap-5 flex flex-col items-center h-full md:w-[50%] w-[70%] pb-16'>
        <Link to='/'>
          <p>Back</p>
        </Link>
        <h1 className='text-2xl text-white'>Delete the User</h1>

        <form onSubmit={submit} className='flex flex-col m-10 w-[100%] h-auto p-8 mb-10 rounded-2xl bg-white shadow-lg'>
          <label className='text-gray-700 mb-2' htmlFor="username">Username:</label>
          <input
            type='text'
            id='username'
            required 
            placeholder='Enter the username you want to delete'  
            onChange={(e) => setUserName(e.target.value)}
            className='border p-2 rounded-md mb-4'
          />
          <button type="submit" className='bg-blue-500 text-white text-center p-2 rounded-md mt-4 hover:bg-blue-600'>
            Delete
          </button>
        </form>
      </div>
    </div>
  )
}

export default Delete;
