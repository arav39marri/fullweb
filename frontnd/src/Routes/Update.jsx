import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newEmail, setNewEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('https://fullweb-db.vercel.app/update', {
        username,
        newName,
        newAge,
        newEmail
      });
      alert("User updated successfully");
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
        <h1 className='text-2xl text-white'>Update User</h1>
        <form onSubmit={submit} className='flex flex-col m-10 w-[100%] h-auto p-8 mb-10 rounded-2xl bg-white shadow-lg'>
          <label className='text-gray-700 mb-2' htmlFor="username">Username:</label>
          <input
            type='text'
            id='username'
            placeholder='Enter username'
            className='border p-2 rounded-md mb-4'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className='text-gray-700 mb-2' htmlFor="name">New Name:</label>
          <input
            type='text'
            id='name'
            placeholder='Enter new name'
            className='border p-2 rounded-md mb-4'
            onChange={(e) => setNewName(e.target.value)}
          />
          <label className='text-gray-700 mb-2' htmlFor="age">New Age:</label>
          <input
            type='text'
            id='age'
            placeholder='Enter new age'
            className='border p-2 rounded-md mb-4'
            onChange={(e) => setNewAge(e.target.value)}
          />
          <label className='text-gray-700 mb-2' htmlFor="email">New Email:</label>
          <input
            type='email'
            id='email'
            placeholder='Enter new email'
            className='border p-2 rounded-md mb-4'
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button type="submit" className='bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600'>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update;
