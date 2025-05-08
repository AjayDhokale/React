
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const SignUp = () => {
  return (
    <div className='w-[460px] h-[670px] shadow-[0_0_5px_rgba(128,128,128)] rounded-lg p-6 bg-white '>
          <div className=' h-full flex flex-col justify-evenly text-[#6c6c6c] font-semibold '>
    
    
            <h1 className='py-3 text-[#494949] font-bold'>SIGN UP</h1>
            <div className=''>
              <div className='mb-4'>
                <label htmlFor="">Email</label>
                <input className='border w-full p-2 my-1 rounded-[12px] border-[#767676]' type="text" />
              </div>
              <div className='m-0'>
                <label htmlFor="">Pasword</label>
                <input className='border w-full p-2 my-1 mb-0 rounded-[12px] border-[#767676]' type="text" />
              </div>
            </div>
           
            <div className=' p-2 flex flex-wrap justify-end mb-2'>
              <button className='cursor-pointer border w-full py-2 rounded-md text-white font-semibold bg-[#f9287a] hover:bg-[#f8487a]'>SIGN UP</button>
              {/* <button className='cursor-pointer mt-2 text-[18px]'>Forgot Password?</button> */}
            </div>
            <div class="flex items-center my-2">
              <hr class=" flex-grow border-t border-gray-300" />
              <span class=" text-gray-500 mx-4 border px-2  rounded-lg">OR</span>
              <hr class=" flex-grow border-t border-gray-300" />
            </div>
    
            <div className=' p-2 mt-2 text-black flex justify-center items-center gap-4  '>
              <div className='border-4 p-2 rounded-4xl font-bold text-[#b40000] flex justify-center items-center '>
                <FaGoogle />
              </div>
              <div className='border-4 p-2 rounded-4xl font-bold text-[#48359b] flex justify-center items-center '>
                <FaFacebookF />
              </div>
              <div className='border-4 p-2 rounded-4xl font-bold text-[#1661be] flex justify-center items-center '>
                <FaLinkedinIn />
              </div>
            </div>
    
            <div className=' p-2 flex justify-center items-center '>
              <p>Already a user? <a href="" className='underline'>LOGIN</a></p>
            </div>
    
          </div>
        </div>
  )
}

export default SignUp