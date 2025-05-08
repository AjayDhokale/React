import React from 'react'
import User from './User.jsx'
import userData from './Users.json'


const AllUsers = () => {
  return (
    <div>
      <h1 className='text-4xl text-[transparent] bg-linear-to-t from-sky-500 to-indigo-500  bg-clip-text  font-bold text-center mt-4 font-serif'>All Users List</h1>
      <div className='flex flex-wrap justify-center gap-10 my-4 '>

        {

          userData.data.data.map((user) => {
            return (
              <User
                name={user.name.title + " " + user.name.first + " " + user.name.last}
                username={user.login.username}
                age={user.dob.age}
                email={user.email}
                gender={user.gender}
                address={user.location.street.name+ ", " + user.location.city + ", " + user.location.state}
                country={user.location.country}
                pic={user.picture.large}
              />
            )
          })

        }

      </div>
    </div>
  )
}

export default AllUsers