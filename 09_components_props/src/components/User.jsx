import React from 'react'

const User = ({ name, username, age, email, gender, address, country, pic, }) => {
    return (
        <div className=' h-[500px] w-70 p-5 border-2 rounded-lg border-gray-400 font-serif flex flex-col justify-center items-center gap-1  '>
            <div className='h-50 w-50 '>
                <img src={pic} alt="" className='w-full h-full ' />
            </div>

            <div >
                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Name: </h1>  
                    <span className='font-normal text-[16px]'> {name}</span>
                </div>
                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Username: </h1> 
                    <span className='font-normal text-[16px]'> {username}</span>
                </div>
                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Age: </h1> 
                    <span className='font-normal text-[16px]'> {age}</span>
                </div>
                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Email: </h1> 
                    <span className='font-normal text-[16px]'> {email}</span>
                </div>

                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Gender: </h1> 
                    <span className='font-normal text-[16px]'> {gender}</span>
                </div>

                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Address: </h1> 
                    <span className='font-normal text-[16px]'> {address}</span>
                </div>

                <div className='flex items-start gap-1 '>
                    <h1 className='font-semibold text-[16px] '>Country: </h1> 
                    <span className='font-normal text-[16px]'>{country}</span>
                </div>

            </div>
        </div>
    )
}

export default User