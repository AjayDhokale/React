import React from 'react'

const Contact = () => {
    return (
        <div className='mb-100  h-90 p-5'>

            <h1 className='font-serif text-center text-[#3c3c65] font-bold text-3xl mb-5  '>Contact <span className='text-[#ff9933]'> us</span></h1>
            <div className='w-full flex justify-center'>
                <div className=' font-serif flex justify-center bg-white w-[95%] rounded-md p-2 shadow-[0_0_5px_rgba(128,128,128,0.24)]'>


                    <div className='w-[100%] '>
                        <iframe className='w-full h-full rounded-sm' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.302995838882!2d73.83973427587739!3d18.51520498257738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be4ceaaaaaab%3A0x4f424a5c1800628f!2sTechRel%20technologies%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1744371727670!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='w-[100%]  p-2 flex flex-col gap-3'>
                        <div className='flex gap-4'>

                            <input className='px-4 py-2 w-[100%] text-[18px] bg-[#e2e2e2] rounded-sm font-serif focus:outline-4 focus:bg-white outline-[#a2ddff] placeholder:text-[#616161] ' type="text" placeholder='Name' />
                            <input className='px-4 py-2 w-[100%] text-[18px] bg-[#e2e2e2] rounded-sm font-serif focus:outline-4 focus:bg-white outline-[#a2ddff] placeholder:text-[#616161]' type="text" placeholder='Mobile Number' />
                        </div>
                        <div>
                            <input className='px-4 py-2 w-[100%] text-[18px] bg-[#e2e2e2] rounded-sm font-serif focus:outline-4 focus:bg-white outline-[#a2ddff] placeholder:text-[#616161]' type="text" placeholder='Email' />
                        </div>
                        <div>
                            {/* <input className='px-4 py-2 w-[100%] text-[18px] h-15 bg-[#e2e2e2] rounded-sm font-serif focus:outline-4 focus:bg-white outline-[#a2ddff] placeholder:text-[#616161]' type="text" placeholder='Message' /> */}
                            <textarea className='px-4 py-2 w-[100%] text-[18px] h-15 bg-[#e2e2e2] rounded-sm font-serif focus:outline-4 focus:bg-white outline-[#a2ddff] placeholder:text-[#616161]' placeholder='Message' ></textarea>
                        </div>
                        <div>
                            <button className='py-2 w-full bg-[#ff9933] tracking-widest font-[500] text-sm  rounded-sm '>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact