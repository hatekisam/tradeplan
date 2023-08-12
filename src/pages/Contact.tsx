import React from 'react'
import { Helmet } from 'react-helmet'

const Contact = () => {
        return (
                <div>
                        <Helmet>
                                <title>Trade Plan | Contact</title>
                        </Helmet>
                        <div className='gap-[5vw] text-[2.2vw] md:text-[1.05vw]  px-[4vw] py-[4vh] md:px-[7.5vw] md:py-[8vh]'>
                                <div className='flex flex-col md:flex-row gap-[5vw] my-[3vh] md:my-[7vh] border-gradient relative'>
                                        <img src="/image/contact.png" alt="" className='absolute top-[30%] left-[5%]  w-[15vw] blur-[300px]' />
                                        <img src="/image/contact2.png" alt="" className='absolute top-[20%]  right-[5%] w-[10vw] blur-3xl ' />
                                        <div className="w-full md:w-[30%] flex flex-col  justify-center p-[1vw] z-30">
                                                <p className='font-bold text-[5vw] md:text-[2.5vw] my-[1vh] md:my-[2vh]'>Let’s Get in Touch</p>
                                                <div className="w-full md:w-[50%] h-[1vh] bg-[#FF6B00] rounded-md"></div>
                                                <p className='text-[#6C6C6C] my-[1vh] md:my-[2vh]'>Say goodbye to uncertainty and hello to confidence! Our state-of-the-art A.I. technology analyzes your trade plan in real-time, providing you with personalized feedback that's exclusively sent to you via private email. .</p>
                                                <p className='my-[1vh] md:my-[2vh] text-[#FF6B00]'>tradeplans.ai <span className='text-black'>@gmail.com</span></p>
                                                <div className="w-full md:w-[50%] h-[1px] bg-black rounded-md"></div>
                                        </div>
                                        <div className="w-full md:w-[70%] flex items-center justify-center z-30" >
                                                <div className=' p-[2vw] rounded-[2vw] text-center w-full'>
                                                        <div className='text-left my-[1vh]'>
                                                                <div className="flex flex-row gap-[1vw] my-[1vh]">
                                                                        <div className='w-[50%]'>
                                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Full Name</p>
                                                                                <input type="text" placeholder='Full Name' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] ' />
                                                                        </div>
                                                                        <div className='w-[50%]'>
                                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Email</p>
                                                                                <input type="text" placeholder='example@gmail.com' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] ' />
                                                                        </div>
                                                                </div>
                                                                <div className="flex flex-row gap-[1vw] my-[1vh]">
                                                                        <div className='w-[50%]'>
                                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Contact Phone</p>
                                                                                <input type="text" placeholder='eg: 1123-419-345' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] ' />
                                                                        </div>
                                                                        <div className='w-[50%]'>
                                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>City/Town</p>
                                                                                <input type="text" placeholder='eg: California' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] ' />
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Feedback</p>
                                                                        <textarea placeholder='Describe your feedback.' className='bg-[#EAEAEA] rounded-md w-full h-[12vh] px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                                </div>
                                                                <input type="submit" value="Submit" className='bg-[#FF6B00] px-[2vw] py-[1vh] rounded-full w-full  h-fit text-white my-[1vh]' />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div >
        )
}

export default Contact