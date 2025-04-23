import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="w-full h-screen">
        <img className="sm:block h-full w-full absolute object-cover -z-30" src="https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_large.jpg" alt='/' />
        <div className="bg-black/50 h-full w-full fixed -z-20"></div>
        <div className="z-10 flex items-center justify-center w-full h-full">
          <div className="fixed w-full h-full px-4 py-24 z-50">
            <div className='max-w-[450px] h-[600px] rounded-lg mx-auto bg-black/75 text-white '>
              <div className="max-w-[360px]  mx-auto py-16 ">
                <h1 className="text-3xl font-bold ">Sign In</h1>
                <form className="w-full flex flex-col py-4">
                  <input className='p-3 my-3 rounded bg-gray-700 text-white' type="email" placeholder='Email' autoComplete='email' />

                  <input className='p-3 my-3 rounded bg-gray-700 text-white' type="password" placeholder='Password' autoComplete='current-password' />
                  <button className="py-3 my-3 bg-red-600 rounded font-bold ">Sign In</button>
                  <div className="flex items-center justify-between ">
                    <div className='flex '>
                      <input type="checkbox"></input>
                      <p className="text-gray-400 px-2 my-2"> Remember me</p>
                    </div>
                    <div className='text-gray-500'>
                      <p>Need help?</p>
                    </div>
                  </div>
                </form>
                <div className="flex ">
                  <p className="text-gray-500">New to Netflix ? </p>
                  <Link to='/signup'>
                    <p className="px-2"> Sign Up.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login