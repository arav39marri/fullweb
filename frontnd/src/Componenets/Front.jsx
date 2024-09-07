import React from 'react'
import { Link } from 'react-router-dom'
                                                                                                                                                                                     

const Front = () => {
  return (
    <div className='h-screen w-full bg-[#6d64d6] flex items-center  justify-center   '>
    <div className='   gap-5 flex flex-col items-center' >
      <h1 className='text-3xl'>Admin console</h1>
      <div className='flex flex-col  gap-3 '>
        

      <Link to='/Creat' >
      <button className='bg-blue-700 border rounded-md p-2 w-20 hover:text-white hover:bg-blue-900 '> create </button>
      </Link>
      <Link to='/View' >
      <button className='bg-blue-700 border rounded-md p-2 w-20 hover:text-white hover:bg-blue-900 '> View </button>
      </Link>
      <Link to='/Delete' >
      <button className='bg-blue-700 border rounded-md p-2 w-20 hover:text-white hover:bg-blue-900 '> Delete </button>
      </Link>
      <Link to='/Update' >
      <button className='bg-blue-700 border rounded-md p-2 w-20 hover:text-white hover:bg-blue-900 '> Update  </button>
      </Link> 


      </div>
    </div>
    </div>
  )
}

export default Front
