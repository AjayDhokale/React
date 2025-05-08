import React, { useState } from 'react'

const DynamicDivComp = () => {

  const [userInput, setUserInput] = useState('')
  const [divs, setDivs] = useState([])
  const [cssProps, setCssProps] = useState(['justify-center', 'justify-around', 'justify-between', 'justify-evenly', 'justify-start', 'justify-end', 'items-center'])
  const [isFlex, setIsFlex] = useState('')
  const [cssApply, setCssApply] = useState('')

  const addTextToArray = () => {
    setDivs([...divs, userInput])
    setUserInput('')
  }

  const applyFlex = (e) => {
    if (isFlex == e.target.value) {
      console.log(isFlex);
      setIsFlex('flex')
    } else {
      console.log(isFlex);
      setIsFlex('')
    }
  }



  const applyProps = (e) => {
    if (cssApply == e.target.value) {
      setCssApply('')
    } else {
      setCssApply(e.target.value)
    }
  }

  return (

    <div className='font-bold flex items-center w-full flex-col text-white' >

      <h1 className='text-2xl text-center text-blue-400 mb-10'>Dynamic Div</h1>
      <div className=' flex justify-center items-center gap-4 mb-10'>
        <input
          type="text"
          className='border-2  rounded-lg p-2 text-2xl '
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className='bg-[#434242] px-8 text-xl py-3 rounded-2xl cursor-pointer '
          onClick={addTextToArray}
        >Add</button>
      </div>

      <div className='flex justify-center items-center flex-wrap mb-10'>
        <button type="button" className='bg-[#434242] px-8 text-xl py-3 rounded-2xl cursor-pointer mx-2 ' onClick={applyFlex}>Flex</button>
        {
          cssProps.map(element => {
            return (
              <button className='bg-[#434242] px-8 text-xl py-3 rounded-2xl cursor-pointer mx-2 '
                type="button"
                value={element}
                onClick={applyProps}
              >{element}</button>
            )
          })
        }
      </div>

      {
        divs.length == 0 ? '' : <div className={`border-2 border-blue-400 rounded-2xl w-[70%] p-4 text-2xl ${isFlex} ${cssApply}`}>

          {
            divs.map(element => {
              return (
                <div>{element}</div>
              )

            })
          }

        </div>
      }
    </div>
  )
}

export default DynamicDivComp