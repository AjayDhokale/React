import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const { userid } = useParams()

    const [flag, setFlag] = useState(0);
    const contactList = [
        {
            id: 1,
            name: "Alice Johnson",
            phone: "123-456-7890",
            email: "alice@example.com",
        },
        {
            id: 2,
            name: "Bob Smith",
            phone: "987-654-3210",
            email: "bob@example.com",
        },
        {
            id: 3,
            name: "Charlie Brown",
            phone: "555-123-4567",
            email: "charlie@example.com",
        },
        {
            id: 4,
            name: "Diana Prince",
            phone: "444-555-6666",
            email: "diana@example.com",
        },
        {
            id: 5,
            name: "Ethan Hunt",
            phone: "333-222-1111",
            email: "ethan@example.com",
        },
    ]



    return (
        <div>
            <div>
                {
                    contactList.map((user) => {
                        if (user.id == userid) {
                            return (<>
                                <h1 >User id:{user.id}</h1>
                                <h1 >User Name:{user.name}</h1>
                                <h1 >User Phone No:{user.phone}</h1>
                                <h1 >User Email:{user.email}</h1>
                            </>
                            )
                        } else {
                            setFlag(1)
                        }
                    })

                   (flag==1)?<h1>User Not found</h1>:''
                }
               
            </div>

        </div>
    )
}

export default UserDetails