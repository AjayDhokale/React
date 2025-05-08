import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {

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
    <div className=' flex justify-evenly'>

      <ul>

        {
          contactList.map((user) => {
            return(
              <li key={user.id}>
                <Link to={`/contact/${user.id}`}>{user.name}</Link> 
              </li>
            )
          })
        }

      </ul>
      <div>
        <Outlet/>
      </div>


    </div>

  )
}

export default Contact