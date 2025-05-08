import React, { useRef } from 'react'

const HooksExample = () => {

    const userColor = useRef()
    const userHeading = useRef()
    const h1Head = useRef()
   


    const changeBg = () => {
        // document.body.style.backgroundColor = userColor.current.value
        console.log(userColor.current.value);   
    }

    const changeHeading = () => {
        console.log(h1Head);
         h1Head.current.innerText = userHeading.current.value
    }



  return (
    <div className=''>
        <input type="text" className='border-2'  ref={userColor} /> 
        
        <br />
        <button type='button' onClick={changeBg} className='bg-black border-2 p-2 rounded-lg'> Change Background </button>

        <hr />

        <h1 className='text-5xl m-10' ref={h1Head}>This Is react</h1>
        <input type="text" className='border-2 m-10' ref={userHeading} />
       
        <button className='bg-black border-2 p-2 rounded-lg' type="button" onClick={changeHeading}>Change Heading</button>
       
       


    </div>
  )
}

export default HooksExample
