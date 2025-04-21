import React from 'react'
import{ Link }from 'react-router-dom';

function Navbar(){
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute md:p-8 ">
      <Link to ='/'>
        <h1 className="text-red-600 font-bold cursor-pointer text-4xl">NETFLIX</h1>
      </Link>
        <div >
          <Link to='/signup'>
            <button className="text-white px-6 py-2 rounded cursor-pointer">Sign In</button>
          </Link>
          <Link to='/login'>
            <button className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer">Sign Up</button>
          </Link>
        </div>
    </div>
  )
}
export default Navbar;
