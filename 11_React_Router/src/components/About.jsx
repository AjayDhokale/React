import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Education from './Education'
import Skills from './Skills'

const About = () => {

  // const course = [
  //   {
  //     name: "html",
  //     desc: `What is HTML?
  //           HTML stands for Hyper Text Markup Language
  //           HTML is the standard markup language for creating Web pages
  //           HTML describes the structure of a Web page
  //           HTML consists of a series of elements
  //           HTML elements tell the browser how to display the content
  //           HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.`

  //   },
  //   {
  //     name: "css" ,
  //     desc: `What is CSS?
  //               CSS stands for Cascading Style Sheets
  //               CSS describes how HTML elements are to be displayed on screen, paper, or in other media
  //               CSS saves a lot of work. It can control the layout of multiple web pages all at once
  //               External stylesheets are stored in CSS files`
  //   }
  // ]


  return (
    <div className=''>
      <h1 className='text-4xl text-center font-bold text-[#006eff] mt-5 '>About</h1>
      <div>

        <div>
          <ul className='flex justify-center items-center gap-2 text-3xl text-[#006eff] mt-2' >
            <li className='cursor-pointer font-semibold  '>
              <Link to="education">Education</Link>
            </li>
            /
            <li className='cursor-pointer font-semibold '>
              <Link to="skills">Skills</Link>
            </li>
          </ul>
        </div>

       
          <div>
           
                <Outlet  />
          
          </div>



        </div>
      </div>
    
  )
}

export default About