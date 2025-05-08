import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { evaluate  } from 'mathjs'


const Calculator = () => {


    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const [screenInputUp, setScreenInputUp] = useState('')
    const [screenInputDown, setScreenInputDown] = useState('')

    const handelClick = (e) => {
        setScreenInputUp(screenInputUp + e.target.value)
    }
    
    const handleInputChange = (e) => {
        setScreenInputUp(e.target.value);
        setScreenInputDown('')
    }

    const handleInputOnKeyDown = (e) => {
        const allowedKeys = ["0","1","2","3","4","5","6","7","8","9", "+", "-", "*", "?", "%", "Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
    
        if (!allowedKeys.includes(e.key)) {
            e.preventDefault();
            return
        }

    }


    
    const autoCal = (e) => {

        if (e.key == 'Enter') {
            setScreenInputDown(evaluate(screenInputUp))
        }

    }
    // autoCal()

    const calculateValue = () => {
        // console.log(screenInputUp);
        // console.log(eval(screenInputUp));
        setScreenInputDown(evaluate(screenInputUp))
    }

    const backSpaceVal = () => {
        setScreenInputUp(screenInputUp.slice(0, -1))
        setScreenInputDown('')

    }

    const clearScreen = () => {
        setScreenInputDown('')
        setScreenInputUp('')
    }

    return (
        <form onKeyDown={autoCal} className='w-[20%] h-[60%] border rounded-2xl overflow-hidden p-4 '>
            <div className='w-full h-[20%] mb-2 border rounded-lg py-2' >
                <input
                    type="text"
                    value={screenInputUp}
                    ref={inputRef}
                    onChange={handleInputChange}
                    onKeyDown={handleInputOnKeyDown}
                    className=' h-[50%] w-full text-4xl text-right py-0 px-4  focus:outline-0'
                    placeholder='0'  />
                <input
                    type="text"
                    value={screenInputDown}
                    className=' h-[50%] w-full text-xl text-right py-0 px-4 focus:outline-0'
                    placeholder='0' readOnly />
            </div>
            <div className='w-full h-[80%]  flex flex-col justify-center gap-2 items-center text-2xl'>
                <div className='flex justify-center items-center h-[25%] w-full  gap-2'>
                    <button
                        className='bg-[#ec8517] w-full h-full border text-xl  '
                        type="button"
                        onClick={clearScreen}
                        value={'C'}
                    >C
                    </button>
                    <button
                        className='bg-[#ec8517] w-full h-full border flex justify-center items-center text-[12px] '
                        type="button"
                        onClick={backSpaceVal}
                        value={'Del'}><FaArrowLeftLong className=' text-xl ' />
                    </button>
                    <button
                        className='bg-[#ec8517] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'%'}
                    >%
                    </button>
                    <button
                        className='bg-[#ec8517] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'/'}
                    >/
                    </button>
                </div>
                <div className='flex justify-center items-center h-[25%] w-full  gap-2'>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'7'}
                    >7
                    </button>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'8'}
                    >8
                    </button>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'9'}
                    >9
                    </button>
                    <button
                        className='bg-[#ec8517] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'*'}
                    >x
                    </button>
                </div>
                <div className='flex justify-center items-center h-[25%] w-full  gap-2'>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'4'}
                    >4
                    </button>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'5'}
                    >5
                    </button>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'6'}
                    >6
                    </button>
                    <button
                        className='bg-[#ec8517] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'-'}
                    >-
                    </button>
                </div>
                <div className='flex justify-center items-center h-[25%] w-full  gap-2'>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'1'}
                    >1
                    </button>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'2'}
                    >2
                    </button>
                    <button
                        className='bg-[#1a1a1a] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'3'}
                    >3
                    </button>
                    <button
                        className='bg-[#ec8517] w-full h-full border '
                        type="button"
                        onClick={handelClick}
                        value={'+'}
                    >+
                    </button>
                </div>
                <div className='flex justify-center items-center h-[25%] w-full  gap-2'>
                    <div className='flex gap-2 w-[50%] h-full '>

                        
                        <button
                            className='bg-[#1a1a1a] w-full h-full border '
                            type="button"
                            onClick={handelClick}
                            value={'.'}
                        >.
                        </button>
                        <button
                            className='bg-[#1a1a1a] w-full h-full border '
                            type="button"
                            onClick={handelClick}
                            value={'0'}
                        >0
                        </button>
                    </div>
                    <div className='w-[50%] h-full'>
                        <button
                            className='bg-[#ec8517] w-full h-full border '
                            type="button"
                            onClick={calculateValue}
                            value={'='}
                        >=
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Calculator