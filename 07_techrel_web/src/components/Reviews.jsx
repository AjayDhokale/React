import React from 'react'
import review1 from '../assets/stdReview1.jpg'
import review2 from '../assets/stdReview2.jpg'
import review3 from '../assets/stdReview3.jpg'
import review4 from '../assets/stdReview4.jpg'
import review5 from '../assets/stdReview5.jpg'
import review6 from '../assets/stdReview6.jpg'
import review7 from '../assets/stdReview7.jpg'

const Reviews = () => {
    const reviewImages = [
        {
            pic: review1
        },
        {
            pic: review2
        },
        {
            pic: review3
        },
        // {
        //     pic: review4
        // },
        // {
        //     pic: review5
        // },
        // {
        //     pic: review6
        // },
        // {
        //     pic: review7
        // },
    ]
    return (
        <div className=' p-4'>
            <h1 className="text-orange-400 text-center font-bold text-3xl  font-serif my-3 ">Student Reviews</h1>

            <div>
                <div className='h-50 flex gap-10 justify-center ' >
                    {
                        reviewImages.map((review) => {
                            return(
                                <img src={review.pic} className='h-full rounded-lg' alt="" />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews