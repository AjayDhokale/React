import React from 'react'

const Property = ({pic, location, rating, description, dates, price,}) => {
    return (


        // shadow-[0_0_10px_rgba(128,128,128,0.50)]

        <div>
            <div className=' p-2 h-90 font-serif  '>
                <div className='h-[250px] w-[250px] rounded-3xl overflow-hidden  '>
                    <img src={pic} alt="" className='h-full object-cover  ' />
                </div>

                <div className='p-3'>
                    <div className='flex justify-between font-bold text-[16px]'>
                        <h1>{location}</h1>
                        <h1>{rating}</h1>
                    </div>
                    <h2 className='text-[16px] text-gray-600'>{description}</h2>
                    <h2 className='text-[16px] text-gray-600 '>{dates}</h2>
                    <h2 className='font-sans text-[16px] font-bold'>{price} <span className='font-normal font-serif'>night</span></h2>
                </div>
            </div>

        </div>
    )
}

export default Property