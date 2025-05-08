import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const GenerateQRCode = () => {

    const [userInput, setUserInput] = useState('')



    return (
        <div className=''>
            <h1 className='text-center text-6xl my-5 '>Generate QR Code</h1>
            <div className='flex justify-center items-center w-full'>

                <input
                    className='border-2 p-2 w-full rounded-lg text-2xl'
                    type="text"
                    placeholder='Enter Your Text'
                    onChange={(e) => setUserInput(e.target.value)}
                    value={userInput}
                />

                <button type='button' className='py-10'>Generate QR</button>
            </div>


        <div className='flex justify-center items-center mt-5'>
            <QRCode value={userInput}
                className='border-2 border-black p-2'
            />
        </div>

        </div>
    )
}

export default GenerateQRCode