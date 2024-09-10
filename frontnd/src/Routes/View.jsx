import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const View = () => {
    const [data, setData] = useState([]);
    const API_URL = 'http://localhost:8500';        
    
    useEffect(() => {
      //console.log(`${API_URL}`)
     const ftch =  axios.get('https://fullweb-back.vercel.app/read').then((res) => {
      
      console.log(res.data);
      setData(res.data);
      return res.data;
      
     }).then((data) => {

     })
    },[]);



  return (
    <div className='h-screen w-full bg-[#766ce1] flex-col   overflow-auto no-scrollbar  '>
   <div className='flex gap-4 w-full p-10 items-center justify-center'> 
   <Link  to='/' > <p>Back</p></Link>
   <h1 className='text-3xl block'>View User</h1>
   </div>
    <div className='   gap-5 ml-20 mr-5 flex flex-wrap p-2 w-full  items-center ' >
        {data && data.length === 0? <p className='ml-20'  >No user found</p> : null}
         {data.map((item,index) => (
            <div key={item._id} className='flex gap-2 flex-col items-center bg-[#f7f7f7] p-8 rounded-md shadow-md'>
              <p>name : {item.name}</p>
              <p>username :{item.username}</p>                                                                                                                                                                                                                                                                                                                                                                                                                  
              <p> Email : {item.email}</p>
              <p> Age : {item.age}</p>
            </div>
          ))}                                                                                                                                       
      </div>
    
    </div>
  )
}

export default View
