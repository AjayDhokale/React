import React from 'react'

const Products = ({ key, category, price, thumbnail, title }) => {

    console.log(category, price, thumbnail, title);

    return (
        <div className=' h-[400px] w-60 p-5 border-2 rounded-lg border-gray-400 font-serif flex flex-col justify-center items-center gap-1  '>
            <div className='h-50 w-50 '>
                <img src={thumbnail} alt="" className='w-full h-full ' />
            </div>

            <div >

                <h1 className='font-semibold text-[16px] '>{title}</h1>
                <h1 className='font-black'>₹{price}</h1>

                <div className=' text-[18px] mt-2   text-blue-500'>
                    <div>{category}</div>
                </div>
            </div>
        </div>
    )
}

export default Products