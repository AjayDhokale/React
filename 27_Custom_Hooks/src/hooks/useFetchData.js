import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useFetchData = (url) => {

    const [response, setResponse] = useState([])



    useEffect(() => {
        async function getUsersData() {
            try {
                const res = await axios.get(url)
                setResponse(res.data)
                console.log(res);

            } catch (error) {
                setResponse([])
                console.log(error);
                
            }
        }

        getUsersData()
    }, [url])

    return response
}


export default useFetchData