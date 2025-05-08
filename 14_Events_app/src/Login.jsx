import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Login = () => {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })



    // const setEmailInput = (e) => setEmail(e.target.value)
    // const setPasswordInput = (e) => setPassword(e.target.value)

    // ------------------------------------------- OR ------------------------------------------------------------------

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.email === 'anu@gmail.com' && formData.password === '1234') {
            console.log(`Login Succesfull :
                            Email =  ${formData.email}  
                            Password =  ${formData.password}
                `)
        } else {
            console.log("Invalid Creadentials")
            // setEmail('')
            // setPassword('')
        }

    }


    return (
        <div className='w-[460px] h-[670px] shadow-[0_0_5px_rgba(128,128,128)] rounded-lg p-6 bg-white'>
            <form className=' h-full flex flex-col justify-evenly text-[#6c6c6c] font-semibold ' onSubmit={handleSubmit}>


                <h1 className='py-3 text-[#494949] font-bold'>LOGIN</h1>
                <div className=''>
                    <div className='mb-4'>
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            className='border w-full p-2 my-1 rounded-[12px] border-[#767676]'
                            name='email'
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div className='m-0'>
                        <label htmlFor="">Pasword</label>
                        <input
                            type="password"
                            className='border w-full p-2 my-1 mb-0 rounded-[12px] border-[#767676]'
                            name='password'
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                </div>
                <div className=' p-2 flex justify-start items-center gap-2 mb-'>
                    <input className='w-5 h-5 border-2 text-blue-600 accent-[#f8487a] ' type="checkbox" />
                    <p>Remember me?</p>
                </div>
                <div className=' p-2 flex flex-wrap justify-end mb-2'>
                    <button
                        type='submit'
                        className='cursor-pointer border w-full py-2 rounded-md text-white font-semibold bg-[#f9287a] hover:bg-[#f8487a]'>
                        LOGIN
                    </button>
                    <a className='cursor-pointer mt-2 text-[18px]'>Forgot Password?</a>
                </div>
                <div className="flex items-center my-2">
                    <hr className=" flex-grow border-t border-gray-300" />
                    <span className=" text-gray-500 mx-4 border px-2  rounded-lg">OR</span>
                    <hr className=" flex-grow border-t border-gray-300" />
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
                    <p>Need an account? <a href="" className='underline'>SIGN UP</a></p>
                </div>

            </form>
        </div>

    )
}

export default Login