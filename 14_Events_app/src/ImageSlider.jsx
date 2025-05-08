import React, { useState } from 'react'

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";



import slider1 from './assets/Images/slider1.png'
import slider2 from './assets/Images/slider2.png'
import slider3 from './assets/Images/slider3.png'
import slider4 from './assets/Images/slider4.png'
import slider5 from './assets/Images/slider5.png'
import slider6 from './assets/Images/slider6.png'
import slider7 from './assets/Images/slider7.png'

const ImageSlider = () => {

    const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7]

    const [currentImg, setCurrentImg] = useState(0)

    const prevImg = () => {
        if (currentImg == 0) {
            setCurrentImg(images.length - 1)
        } else  {
            setCurrentImg(currentImg - 1)
        }
    }

    const nextImg = () => {
        if (currentImg == images.length - 1) {
            setCurrentImg(0)
        } else {
            setCurrentImg(currentImg + 1)
        }
    }



    return (
        <div className='h-screen bg-[#7db1c6] flex items-center justify-center'>
            <div className='flex justify-evenly items-center w-full'>

                <button type='button' onClick={prevImg} className=' font-bold text-3xl flex justify-center items-center  p-5  bg-[black]  rounded-full'><MdArrowBackIos />
                </button>

                <div className=' border-6 h-150 w-250 rounded-2xl overflow-hidden'>
                    <img src={images[currentImg]} alt="" className='h-full w-full' />
                </div>

                <button type='button' onClick={nextImg} className=' font-bold text-3xl flex justify-center items-center  p-5  bg-[black] rounded-full'><MdArrowForwardIos />
                </button>


            </div>
        </div>
    )
}

export default ImageSlider