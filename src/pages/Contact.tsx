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
                                                                                <input type="text" placeholder='Full Name' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1.5vh] placeholder:text-[#636363] ' />
                                                                        </div>
                                                                        <div className='w-[50%]'>
                                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Email</p>
                                                                                <input type="text" placeholder='example@gmail.com' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1.5vh] placeholder:text-[#636363] ' />
                                                                        </div>
                                                                </div>
                                                                <div className="flex flex-row gap-[1vw] my-[1vh]">
                                                                        <div className='w-[50%]'>
                                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Contact Phone</p>
                                                                                <input type="text" placeholder='eg: 1123-419-345' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1.5vh] placeholder:text-[#636363] ' />
                                                                        </div>
                                                                        <div className='w-[50%]'>
                                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>City/Town</p>
                                                                                <input type="text" placeholder='eg: California' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1.5vh] placeholder:text-[#636363] ' />
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Feedback</p>
                                                                        <textarea placeholder='Describe your feedback.' className='bg-[#EAEAEA] rounded-md w-full h-[20vh] px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                                </div>
                                                                <button className="flex flex-row gap-[.5vw] bg-[#0094FF] w-fit px-[3vw] py-[1.5vh] items-center font-bold rounded-sm text-white ">
                                                                        <p>Submit</p>
                                                                        <div className="h-8 w-[1px] bg-white" />
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="8" viewBox="0 0 35 8" fill="none">
                                                                                <path d="M34.3536 4.35355C34.5488 4.15829 34.5488 3.84171 34.3536 3.64645L31.1716 0.464466C30.9763 0.269204 30.6597 0.269204 30.4645 0.464466C30.2692 0.659728 30.2692 0.976311 30.4645 1.17157L33.2929 4L30.4645 6.82843C30.2692 7.02369 30.2692 7.34027 30.4645 7.53553C30.6597 7.7308 30.9763 7.7308 31.1716 7.53553L34.3536 4.35355ZM0 4.5H34V3.5H0V4.5Z" fill="white" />
                                                                        </svg>
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div >
        )
}

export default Contact