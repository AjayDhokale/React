import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const SITE_KEY = '6LfZuDArAAAAAKwcTBWklMRykZs_-DpjD8hp3Ryr'

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        recaptchaVerified: false
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        console.log(formData);

    }

    const handleRecaptchaChange = (value) => {
        console.log(value);

        // const isVerified = value ? true : false
        const isVerified = !!value                      // new Method

        setFormData({
            ...formData,
            recaptchaVerified: isVerified
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let email = 'admin'
        let password = '123'



        if (formData.email !== email) return
        console.log("1");

        if (formData.password !== password ) return
        console.log("2");

        if (!formData.recaptchaVerified) return
        console.log("3");

        navigate(`/dashboard/${email}/${password}`)
        // <Link to='/dashboard'></Link>
        
        // if (formData.email == 'admin' && formData.password == '123') {
        // }

        console.log("Login Succesfully...");

    }

    return (
        <div onSubmit={handleSubmit} className='flex justify-center  '>

            <form action="" className='rounded-xl shadow-[0_0_10px_rgba(128,128,128)] w-90 h-120 px-6 py-4 flex justify-evenly flex-col' >
                <h1 className='text-4xl font-bold text-center '>Login Form</h1>
                <div className='mt-8 flex flex-col justify-start'>
                    <label htmlFor="email" className='text-start font-bold '>Enter Email:</label>
                    <input
                        type="text"
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                        id='email'
                        className='border w-full p-2 rounded-lg my-2'
                    />
                </div>
                <div className='flex flex-col justify-start'>
                    <label htmlFor="password" className='text-start font-bold '>Enter Password:</label>
                    <input
                        type="text"
                        name='password'
                        onChange={handleChange}
                        value={formData.password}
                        id='password'
                        className='border w-full p-2 rounded-lg my-2'
                    />
                </div>
                <div className='mt-5 w-full flex justify-center  '>
                    <ReCAPTCHA sitekey={SITE_KEY} onChange={handleRecaptchaChange} />
                </div>
                <div className='mt-5  '>
                    <button
                        type="submit"
                        className='bg-blue-400 cursor-pointer hover:bg-blue-600 px-9 py-3 font-bold text-white text-2xl rounded-xl '
                    >Login</button>
                </div>

            </form>


        </div>
    )
}

export default Login