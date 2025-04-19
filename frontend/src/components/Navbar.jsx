import React from 'react'

function Navbar(){
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute md:p-8 ">
        <h1 className="text-red-600 font-bold cursor-pointer text-4xl">NETFLIX</h1>
        <div >
            <button className="text-white px-6 py-2 rounded cursor-pointer">Sign In</button>
            <button className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer">Sign Up</button>
        </div>
    </div>
  )
}
export default Navbar;
