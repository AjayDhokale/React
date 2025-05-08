import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     document.title = `Count 1 :${count} | Count 2 : ${count2}`
    // }, [count , count2])

    useEffect(() => {
        console.log('Home Component Mounted')
        return () => {
            console.log("Home Component Unmounted");
        }
    }, [])

    useEffect(() => {
        const getAllUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            console.log(data);
            setUsersData([...data])
        }
        setLoading(true)
        getAllUsers()
        setLoading(false)
    }, [])


    return (

        <>
            {loading ? <h1 className='text-4xl'>Loading ....</h1>
                :
                <div className='h-90 bg-gray-800 flex justify-center items-center flex-col '>
                    {/* <h1 className=' text-6xl cursor-pointer' onClick={() => setCount(count + 1)}>Count 1 : {count}</h1>
        <h1 className=' text-6xl cursor-pointer' onClick={() => setCount2(count2 + 1)}>Count 2 : {count2}</h1> */}

                    <ul>
                        {
                            usersData.map((element) => {
                                return (
                                    <li key={element.id}>{element.name}</li>
                                )
                            })
                        }
                    </ul>

                </div>
            }
        </>
    )
}

export default Home