import React from 'react'
import Property from './Property'

import vila1 from '../assets/vila1.png'
import vila2 from '../assets/vila2.png'
import vila3 from '../assets/vila3.png'
import vila4 from '../assets/vila4.png'
import vila5 from '../assets/vila5.png'

const AllProperties = () => {

    const properties = [
        {
            pic: vila1,
            location: "Dhonakulhi, Maldives",
            rating: "4.0",
            description: "1350 kilometres away",
            dates: "1–6 Jul",
            price: "₹2,38,498",
        },
        {
            pic: vila2,
            location: "Goidhoo, Maldives",
            rating: "5.0",
            description: "1568 kilometres away",
            dates: "10–15 Apr",
            price: "₹9,153",
        },
        {
            pic: vila3,
            location: "Malé, Maldives",
            rating: "4.8",
            description: "1648 kilometres away",
            dates: "11–16 Apr",
            price: "₹2,01,168",
        },
        {
            pic: vila4,
            location: "Hulhumalé, Maldives",
            rating: "4.3",
            description: "1643 kilometres away",
            dates: "1–6 May",
            price: "₹19,875",
        },
        {
            pic: vila5,
            location: "Malé, Maldives",
            rating: "4.9",
            description: "1644 kilometres away",
            dates: "11–16 Apr",
            price: "₹18,608",
        },

    ]

    return (
        <div className='flex justify-center items-center flex-wrap  mt-6'>
            {
                properties.map((vila) => {
                    return(
                        <Property pic={vila.pic} location={vila.location} rating={vila.rating} description={vila.description} dates={vila.dates} price={vila.price} />
                    )
                })
            }
            {
                properties.map((vila) => {
                    return(
                        <Property pic={vila.pic} location={vila.location} rating={vila.rating} description={vila.description} dates={vila.dates} price={vila.price} />
                    )
                })
            }
            {
                properties.map((vila) => {
                    return(
                        <Property pic={vila.pic} location={vila.location} rating={vila.rating} description={vila.description} dates={vila.dates} price={vila.price} />
                    )
                })
            }
            {
                properties.map((vila) => {
                    return(
                        <Property pic={vila.pic} location={vila.location} rating={vila.rating} description={vila.description} dates={vila.dates} price={vila.price} />
                    )
                })

            }

            {/* <Property pic="" location="" description="" dates="" price="" /> */}
        </div>
    )
}






export default AllProperties