import React from 'react'

const Education = () => {
  return (
    <div>
        <table className='table-auto w-full border-collapse border border-black  text-xl'>
            <thead>
                <tr className='bg-[#adedff]'>
                    <th className='p-4 border'>Sr No.</th>
                    <th className='p-4 border'>Degree</th>
                    <th className='p-4 border'>Institution</th>
                    <th className='p-4 border'>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='p-4 border text-center'>1</td>
                    <td className='p-4 border text-center'>B.Tech (IT)</td>
                    <td className='p-4 border text-center'>Shivaji University</td>
                    <td className='p-4 border text-center'>2024</td>
                </tr>
                <tr>
                    <td className='p-4 border text-center'>2</td>
                    <td className='p-4 border text-center'>B.Tech (IT)</td>
                    <td className='p-4 border text-center'>Shivaji University</td>
                    <td className='p-4 border text-center'>2024</td>
                </tr>
                <tr>
                    <td className='p-4 border text-center'>3</td>
                    <td className='p-4 border text-center'>B.Tech (IT)</td>
                    <td className='p-4 border text-center'>Shivaji University</td>
                    <td className='p-4 border text-center'>2024</td>
                </tr>
                <tr>
                    <td className='p-4 border text-center'>4</td>
                    <td className='p-4 border text-center'>B.Tech (IT)</td>
                    <td className='p-4 border text-center'>Shivaji University</td>
                    <td className='p-4 border text-center'>2024</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Education