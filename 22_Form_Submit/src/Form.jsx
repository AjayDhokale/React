import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [studentData, setStudentData] = useState([{
        name: 'Ajay',
        email: 'ajay@gmail.com ',
        phone: '7020990524',
        age: '23',
        city: 'ich'
    }])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        city: ''
    })


    const handleInput = (e) => {
        console.log(e.target.name);
        setFormData({...formData, [e.target.name]: e.target.value })
        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStudentData([...studentData, formData])
    }



    return (
        <div className='h-screen w-full p-10 border border-red-400 flex justify-center items-center'>
            <div className=' border w-[70%] h-[85%] p-4 text-center place-items-center   '>
                <h1 className='mb-10'>Students Data</h1>
                <table className='border w-[90%] text-xl'>
                    <thead>
                        <tr className='border h-10'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentData.map(std => {
                                return (
                                    <tr  className='border h-10'>
                                        <td>{std.name}</td>
                                        <td>{std.email}</td>
                                        <td>{std.phone}</td>
                                        <td>{std.age}</td>
                                        <td>{std.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

            <div className='border w-[30%] h-[85%] px-10 py-5 font-bold text-lg font-serif tracking-widest'>
                <form onSubmit={handleSubmit}>
                    <div className='my-10'>
                        <input
                            name='name'
                            onChange={handleInput}
                            type="text"
                            className='w-full px-6 py-2 border rounded-md'
                            placeholder='Enter Name' />
                    </div>
                    <div className='my-10'>
                        <input
                            name='email'
                            onChange={handleInput}
                            type="text"
                            className='w-full px-6 py-2 border rounded-md'
                            placeholder='Enter Email' />
                    </div>
                    <div className='my-10'>
                        <input
                            name='phone'
                            onChange={handleInput}
                            type="text"
                            className='w-full px-6 py-2 border rounded-md'
                            placeholder='Enter Phone' />
                    </div>
                    <div className='my-10'>
                        <input
                            name='age'
                            onChange={handleInput}
                            type="text"
                            className='w-full px-6 py-2 border rounded-md'
                            placeholder='Enter Age' />
                    </div>
                    <div className='my-10'>
                        <input
                            name='city'
                            onChange={handleInput}
                            type="text"
                            className='w-full px-6 py-2 border rounded-md'
                            placeholder='Enter City' />
                    </div>

                    <div className='my-10 flex justify-center'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Form