import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Skills = () => {


    // const course = [
    //     {
    //         name: "html",
    //         desc: `What is HTML?
    //             HTML stands for Hyper Text Markup Language
    //             HTML is the standard markup language for creating Web pages
    //             HTML describes the structure of a Web page
    //             HTML consists of a series of elements
    //             HTML elements tell the browser how to display the content
    //             HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.`

    //     },
    //     {
    //         name: "css",
    //         desc: `What is CSS?
    //                 CSS stands for Cascading Style Sheets
    //                 CSS describes how HTML elements are to be displayed on screen, paper, or in other media
    //                 CSS saves a lot of work. It can control the layout of multiple web pages all at once
    //                 External stylesheets are stored in CSS files`
    //     }
    // ]

    return (
        <div className='flex justify-center gap-10 mt-10 '>

            <div>
                <ul className=' w-40 ml-20  text-lg'>
                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="html" >Html</Link>
                    </li>

                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="css" >Css</Link>
                    </li>

                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="javascript">Javascript</Link>
                    </li>

                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="node">Node</Link>
                    </li>

                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="react">React</Link>
                    </li>

                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="express">Express</Link>
                    </li>

                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="mango">MongoDB</Link>
                    </li>

                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="git">Git</Link>
                    </li>

                    <li className='bg-[#adedff] border p-2 mb-2 rounded-lg  text-center '>
                        <Link to="bootstrap">Bootstrap</Link>
                    </li>

                </ul>
            </div>

            <div className='w-[60%] flex justify-center '>

                <Outlet  />

            </div>

        </div>
    )
}

export default Skills
