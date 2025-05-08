import React from 'react'

const Plan = ({ title, sub, dashPrice, discount, price, free, renew }) => {
    return (
        <div className='border-2 border-gray-400 rounded-2xl w-70 h-100 py-10 px-6 '>
            <div className=''>

                <div className='h-25'>
                    <h1 className='text-[#302c53] font-bold my-2 '>{title}</h1>
                    <h1 className='text-[14px] text-gray-800 mb-10'>{sub}</h1>
                </div>

                <div>
                    <div className='flex items-center gap-1'>
                        <h2 className='text-[12px] line-through'>{dashPrice}</h2>
                        <h2 className='bg-[#d8e8fe] text-[#2f1c6a] text-[14px] font-bold px-3 py-1 rounded-full '>{discount}</h2>
                    </div>

                    <div className=' h-20'>
                        <h1>₹ <span className='text-[48px] text-[#2f1c6a] font-semibold'>{price}</span>/mo</h1>
                        <div>
                            <h1 className='text-[20px] font-bold text-[#673de6]'>{free}</h1>
                        </div>
                    </div>  

                </div>
                <div className=' mt-3'>
                    <button className='text-[#673de6] hover:bg-[#f2eeff] text-[16px] font-[700] rounded-md border-2 w-full py-[9px]  my-2 '>Choose Plan</button>
                    <h1 className='text-[12px]'>{renew}</h1>
                </div>
            </div>
        </div>
    )
}

export default Plan