import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const Dashboard = () => {

    const { email, pass } = useParams()

    return (
        <>
            <div className='text-center flex justify-center items-center min-h-100'>
                <Sidebar />
                <Navbar />

                <div className='text-4xl font-bold' >
                    <h1 className='' >
                        {email} ,Welcome to Dashboard
                    </h1>
                    <h1>Email: {email},</h1>
                    <h1>password: {pass}</h1>
                </div>

            </div>
            <div className='h-screen'>

            </div>
        </>
    )
}

export default Dashboard