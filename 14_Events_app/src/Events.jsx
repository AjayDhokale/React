import React from 'react'

const Events = () => {
    let h1 = document.querySelector(".h1")
    let h2 = document.querySelector(".h2")
    // let input = document.querySelector("input").value

    

    const greetHello = () => {
        h1.innerText = 'Hello World'
    }
    const greetGM = (name) => {
        h1.innerText = 'Good Morning ' + name
    }


    let backcolor = ""

    const getColor = (e) => {
        backcolor = e.target.value
        // console.log(backcolor);  
    }

    const bgColor = () => {
        document.body.style.backgroundColor = backcolor
        console.log(backcolor);
        h1.innerText = backcolor
    }
    
    const color = (e) => {
        let color = e.target.value
        document.body.style.color = color
        h1.innerText = color

    }


    return (
        <div className='flex justify-center items-center flex-col gap-[20%] h-screen'>
            <h2 className='h2 text-2xl'>Welcome to react</h2>
            <div className='flex gap-10'>
                <button className='border-2 px-4 py-2 rounded-lg cursor-pointer' type="button" onClick={greetHello}>Helloo</button>
                <button className='border-2 px-4 py-2 rounded-lg cursor-pointer' type="button" onClick={() => greetGM('Ajay')}>Good Morning</button>

                <br />
                <input className='border-2' type="text" onChange={getColor} />
                <button className='border-2 px-4 py-2 rounded-lg cursor-pointer' type="button" onClick={bgColor}>change Bg</button>
                <input className='border-2' type="color" onChange={color} />
            </div>


            <div>
                <h2 className='h1'>Hii</h2>
            </div>

        </div>
    )
}

export default Events