import React, { useEffect, useState } from 'react';
import Users from './Users';
import axios from 'axios';
import useFetchData from '../hooks/useFetchData';

const AllUser = () => {
  // const [response, setResponse] = useState([]);

  // useEffect(() => {
  //   async function getUsersData() {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     setResponse(res.data);
  //   }
  //   getUsersData();
  // }, []);


  const response=  useFetchData(`https://jsonplaceholder.typicode.com/users`)


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-center text-5xl font-extrabold text-blue-800 mb-10">All Users</h1>

      {response.length === 0 ? (
        <h2 className="text-3xl font-semibold text-center text-gray-600">No Users to display...</h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {response.map((res) => (
            <Users
              key={res.id}
              id={res.id}
              name={res.name}
              username={res.username}
              email={res.email}
              phone={res.phone}
              company={res.company.name}
              address={res.address.street}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUser;
