import React from 'react'
import { useState } from 'react';
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";




const TextStyling = () => {



  const [bold, setBold] = useState('font-normal')
  const [italic, setItalic] = useState('normal')
  const [underline, setUnderline] = useState('no-underline')

  const [fontSize, setFontSize] = useState(2)



  const sizeArr = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 42, 44, 46, 48, 72]



  const makeBoldToggle = () => {
    if (bold === 'font-bold') {
      setBold('font-normal')
    } else {
      setBold('font-bold')
    }
  }

  const makeItalicToggle = () => {
    if (italic === 'italic') {
      setItalic('normal')
    } else {
      setItalic('italic')
    }
  }

  const makeUnderlineToggle = () => {
    if (underline === 'no-underline') {
      setUnderline('underline')
    } else {
      setUnderline('no-underline')
    }
  }


  const selectFontSize = (e) => {


    setFontSize()
    // setFontSize(e.target.value)

  }

  const inputFontsize = (e) => {
    setFontSize()
    setFontSize(e.target.value)
  }



  const size =  `text-[${fontSize}px]`;
  console.log(size);
  

  return (
    <div className='border-2 w-[70%] h-[80%]'>

      <div className='h-[15%] border text-2xl flex justify-evenly items-center'>
        <button onClick={makeBoldToggle} className='flex justify-center items-center border rounded-md h-10 w-10  '>
          <FaBold />
        </button>
        <button onClick={makeItalicToggle} className='flex justify-center items-center border rounded-md h-10 w-10  '>
          <FaItalic />
        </button>
        <button onClick={makeUnderlineToggle} className='flex justify-center items-center border rounded-md h-10 w-10  '>
          <FaUnderline />
        </button>
        <div className='flex justify-center items-center border rounded-md h-10 w-35 '>
          <input type="number" className=' w-20' onChange={inputFontsize} value={fontSize} />
          <select className='text-md  h-full w-4 focus:outline-0 ' onChange={selectFontSize}>

            {
              sizeArr.map((px) => {
                // console.log(px);

                return (
                  <option className='m-0 p-0 h-0 w-15 text-sm text-center' value={px}>{px}</option>
                )
              })
            }
          </select>
          {/* <IoIosArrowDown /> */}
        </div>
      </div>

      <div className={`bg-white text-black ${bold} ${italic} ${underline} ${size} w-full h-[85%] font-mono tracking-widest leading-10 p-5 `}>
        In this article, Id like to reacquaint you with the humble workhorse of communication that is the paragraph. Paragraphs are everywhere. In fact, at the high risk of stating the obvious, you are reading one now. Despite their ubiquity, we frequently neglect their presentation. This is a mistake.
        This is a mistake. Here, well refer to some time-honored typesetting conventions, with an emphasis on readability, and offer guidance on adapting them effectively for devices and screens. Well see that the ability to embed fonts with @font-face is not by itself a solution to all of our typographic challenges.
      </div>


<div className='text-[35px] border-2'>
  hello
</div>
    </div>
  )
}

export default TextStyling