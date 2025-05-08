import React from 'react'
import { useParams } from 'react-router-dom'

const Technology = () => {

    const { tech } = useParams()

    const course = [
        {
            id: 1,
            name: "HTML",
            path: "html",
            desc: `What is HTML?
                HTML stands for Hyper Text Markup Language
                HTML is the standard markup language for creating Web pages
                HTML describes the structure of a Web page
                HTML consists of a series of elements
                HTML elements tell the browser how to display the content
                HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.`

        },
        {
            id: 2,
            name: "CSS",
            path: "css",
            desc: `What is CSS?
                    CSS stands for Cascading Style Sheets
                    CSS describes how HTML elements are to be displayed on screen, paper, or in other media
                    CSS saves a lot of work. It can control the layout of multiple web pages all at once
                    External stylesheets are stored in CSS files`
        },
        {
            id: 3,
            name: "JavaScript",
            path: "javascript",
            desc: `What is JavaScript?
                    JavaScript is the programming language of the web.
                    It can update and change both HTML and CSS.
                    It can calculate, manipulate and validate data.`
        },
        {
            id: 4,
            name: "NodeJs",
            path: "node",
            desc: `What is Node.js?
                    Node.js is an open source server environment
                    Node.js is free
                    Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
                    Node.js uses JavaScript on the server`
        },
        {
            id: 5,
            name: "React",
            path: "react",
            desc: `What is React?
                    React is a front-end JavaScript library.
                    React was developed by the Facebook Software Engineer Jordan Walke.
                    React is also known as React.js or ReactJS.
                    React is a tool for building UI components.`
        },
        {
            id: 6,
            name: "Express",
            path: "express",
            desc: `Why learn Express?
                    Express.js is extremely useful because:
                    It simplifies building web servers and APIs.
                    Integrates seamlessly with Node.js.
                    Offers extensive middleware support.
                    Ideal for single-page applications and RESTful APIs.`
        },
        {
            id: 7,
            name: "MongoDB",
            path: "mango",
            desc: `Records in a MongoDB database are called documents, and the field values may include numbers, strings, booleans, arrays, or even nested documents.`
        },
        {
            id: 8,
            name: "Git",
            path: "git",
            desc: `Git is a version control system.
                    Git helps you keep track of code changes.
                    Git is used to collaborate on code.`
        },
        {
            id: 9,
            name: "Bootstrap",
            path: "bootstrap",
            desc: `What is Bootstrap?
                    Bootstrap is a free front-end framework for faster and easier web development
                    Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
                    Bootstrap also gives you the ability to easily create responsive designs`
        },

    ]



    const pathTech = course.find((techno) => (techno.path === tech))

    console.log(pathTech);

    return (
        <div>

            <div>

                <h1 className='text-3xl font-semibold'>{pathTech.name}</h1>
                <p className='text-lg'>
                    {pathTech.desc}
                </p>
            </div>


        </div>
    )
}

export default Technology