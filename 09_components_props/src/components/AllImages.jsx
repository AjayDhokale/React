import React from 'react'
import Image from './Image.jsx'
import imageData from './Images.json'

const AllImages = () => {
  return (
    <div>
    <h1 className='text-4xl text-[transparent] bg-linear-to-t from-sky-500 to-indigo-500  bg-clip-text  font-bold text-center mt-4 font-serif'>All Images </h1>
    <div className='flex flex-wrap justify-center gap-10 my-4 '>

      {

        imageData.map((pic) => {
          console.log(pic.url);
          
          return (
            <Image
              
              authors={pic.author}
              width={pic.width}
              height={pic.height}
              url={pic.download_url}
                             
            />
          )
        })

      }

    </div>
  </div>
  )
}

export default AllImages