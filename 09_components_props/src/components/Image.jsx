import React from 'react'

const Image = ({authors,width, height,url}) => {
  return (
    <div className=' h-[300px] w-60 p-5 border-2 rounded-lg border-gray-400 font-serif flex  justify-center items-center gap-3  '>
    <div className=' w-full h-full'>
        <img src={url} alt=""  className='w-full h-[90%] ' />
        <h1 className='text-center mt-1'>{authors}</h1>
    </div>

    {/* <div className='flex flex-col gap-3 w-[65%]' >
        <div className='flex items-start gap-1'>
            <h1 className='font-semibold text-[16px] '>bookTitle: </h1>
            <span className='font-normal text-[16px]'> {bookTitle}</span>
        </div>
        <div className='flex items-start gap-1'>
            <h1 className='font-semibold text-[16px] '>subTitle: </h1>
            <span className='font-normal text-[16px]'> {subTitle}</span>
        </div>
        <div className='flex items-start gap-1'>
            <h1 className='font-semibold text-[16px] '>authors: </h1>
            <span className='font-normal text-[16px]'> {authors}</span>
        </div>
        <div className='flex items-start gap-1'>
            <h1 className='font-semibold text-[16px] '>publisher: </h1>
            <span className='font-normal text-[16px]'> {publisher}</span>
        </div>

        <div className='flex items-start gap-1'>
            <h1 className='font-semibold text-[16px] '>catgory: </h1>
            <span className='font-normal text-[16px]'> {catgory}</span>
        </div>

      
    </div> */}
</div>
  )
}

export default Image