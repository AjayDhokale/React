import React from 'react'

const Book = ({bookTitle, subTitle, authors, publisher,description, catgory, pic}) => {
    return (
        <div className=' h-[300px] w-120 p-5 border-2 rounded-lg border-gray-400 font-serif flex  justify-center items-center gap-3  '>
            <div className='h-50 w-[35%] '>
                <img src={pic} alt="" className='w-full h-full ' />
            </div>

            <div className='flex flex-col gap-3 w-[65%]' >
                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>BookTitle: </h1>
                    <span className='font-normal text-[16px]'> {bookTitle}</span>
                </div>
                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>SubTitle: </h1>
                    <span className='font-normal text-[16px]'> {subTitle}</span>
                </div>
                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Authors: </h1>
                    {
                        authors.map((auth) => {
                            return(
                                <span className='font-normal text-[16px]'> {auth},</span>
                            )
                        } )
                    }
                </div>
                
                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Publisher: </h1>
                    <span className='font-normal text-[16px]'> {publisher}</span>
                </div>
                
                {/* <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Description: </h1>
                    <span className='font-normal text-[2px] wrap-normal'> {description}</span>
                </div> */}

                <div className='flex items-start gap-1'>
                    <h1 className='font-semibold text-[16px] '>Catgory: </h1>
                    <span className='font-normal text-[16px]'> {catgory}</span>
                </div>

              
            </div>
        </div>
    )
}

export default Book