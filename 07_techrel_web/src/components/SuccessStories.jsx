import React from 'react'


import stud1 from '../assets/student1.png'
import stud2 from '../assets/student2.png'
import stud3 from '../assets/student3.png'
import stud4 from '../assets/student4.png'

import Student from './Student'

const SuccessStories = () => {

    const placedStudents = [
        {
            imgsrc: stud1,
            stdname: "Sachine Sasne",
            company: "Data Vision Pvt Ltd",
            designation: "Full Stack Java Devloper",
            salary: "5.05 LPA",
        },
        {
            imgsrc: stud2,
            stdname: "Ashwagndha Shelake",
            company: "Accelon Technologies",
            designation: "Jr Dot Net Developer",
            salary: "2.52 LPA",
        },
        {
            imgsrc: stud3,
            stdname: "Sujjet Lomate",
            company: "Sonata Software Pvt Ltd",
            designation: "Full Stack Dot Net",
            salary: "12.00 LPA",
        },
        {
            imgsrc: stud4,
            stdname: "Mahesh Tapse",
            company: "Softcat India",
            designation: "Dot Net Developer",
            salary: "12.50 LPA",
        },

    ]


    return (
        <div>
            <h1 className="text-orange-400 text-center font-bold text-3xl font-serif mt-10">Our Success Story</h1>

            <div className='flex justify-center gap-4  mt-10 mb-10 '>


                {
                    placedStudents.map((std) => {
                        
                        return(
                            <Student imgsrc={std.imgsrc} stdname={std.stdname} company={std.company} designation={std.designation} salary={std.salary} />
                        )
                    })
                }


                {/* <Student imgsrc={stud1} stdname="Sachine Sasne" company= "Data Vision Pvt Ltd" designation= "Full Stack Java Devloper" salary="5.05 LPA" />
            <Student imgsrc={stud2} stdname="" company= "" designation= "" salary="" />
            <Student imgsrc={stud3} stdname="" company= "" designation= "" salary="" />
            <Student imgsrc={stud4} stdname="" company= "" designation= "" salary="" /> */}

            </div>




        </div>
    )
}

export default SuccessStories