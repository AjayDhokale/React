import React from 'react'
import Plan from './Plan'

const Pricing = () => {

    const allPlans = [
        {
            title: "Single",
            sub: "A great solution for beginners",
            dashPrice: "₹ 399.00",
            discount: "SAVE 83%",
            price: "69.00",
            free: "",
            renew: "Renews at ₹179.00/mo for 4 years. Cancel anytime."
        },
        {
            title: "Premium",
            sub: "Everything you need to create your website.",
            dashPrice: "₹ 599.00",
            discount: "SAVE 75%",
            price: "149.00",
            free: "+2 months free",
            renew: "Renews at ₹249.00/mo for 4 years. Cancel anytime."
        },
        {
            title: "Business",
            sub: "Level up with more power and enhanced features.",
            dashPrice: "₹ 699.00",
            discount: "SAVE 64%",
            price: "249.00",
            free: "+2 months free",
            renew: "Renews at ₹179.00/mo for 4 years. Cancel anytime."
        },
        {
            title: "Cloud Startup",
            sub: "Enjoy optimised performance & guaranteed resources.",
            dashPrice: "₹ 1,699.00",
            discount: "SAVE 65%",
            price: "599.00",
            free: "+2 months free",
            renew: "Renews at ₹1,199.00/mo for 4 years. Cancel anytime."
        },
    ]

  return (
    <div className='flex gap-4 m-10  '>
        
        {
            allPlans.map((plan) => {
                return(
                    <Plan title={plan.title} sub={plan.sub} dashPrice={plan.dashPrice} discount={plan.discount} price={plan.price} free={plan.free} renew={plan.renew} />
                )
            })
        }


    </div>
  )
}

export default Pricing