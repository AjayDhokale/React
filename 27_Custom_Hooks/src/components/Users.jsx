import React from 'react';

const Users = ({ id, name, username, email, phone, company, address }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">👤 {name} <span className="text-gray-500 text-sm">({username})</span></h2>
      <p className="text-gray-700"><strong>Email:</strong> {email}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {phone}</p>
      <p className="text-gray-700"><strong>Company:</strong> {company}</p>
      <p className="text-gray-700"><strong>Address:</strong> {address}</p>
      <p className="text-gray-500 text-sm mt-2">User ID: {id}</p>
    </div>
  );
};

export default Users;
