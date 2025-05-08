import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        async function GetPostData() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setResponse(res.data);
        }
        GetPostData();
    }, []);

    return (
        <div className='min-h-screen bg-gray-100 p-6'>
            <div className='max-w-5xl mx-auto'>
                <h1 className='text-center text-5xl font-extrabold text-blue-800 mb-10'>All Posts</h1>

                {response.length === 0 ? (
                    <h2 className='text-3xl font-semibold text-center text-gray-600'>No Posts to display</h2>
                ) : (
                    <div className='space-y-6'>
                        {response.map((res) => (
                            <div key={res.id} className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300'>
                                <h2 className='text-2xl font-bold text-gray-800 mb-2'>{res.id}. {res.title}</h2>
                                <p className='text-gray-700 text-lg leading-relaxed'>{res.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Posts;
