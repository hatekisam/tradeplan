import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
        return (
                <div className='fixed top-0 left-0 w-full border-[#0094FF] border-b z-50 bg-white'>
                        <div className="flex flex-row px-[8vw] py-[2vh] justify-between text-[1.05vw]">
                                <div className="flex flex-row gap-2 items-center">
                                        <img src="/svg/logo.svg" alt="" className='w-[2.6vw]' />
                                        <p className='text-[#FF6B00] '>TradePlans<span className='text-[#0094FF]'>.AI</span></p>
                                </div>
                                <div className="flex flex-row gap-2 items-center text-[#939393]">
                                        <Link to={"/"}>Home</Link>
                                        <Link to={"/feedback"}>Feedback</Link>
                                        <Link to={"/about"}>About Us</Link>
                                        <Link to={"/contact"}>Contact Us</Link>
                                        <Link to={"/donate"}>Donate</Link>
                                </div>
                                <div className="flex flex-row gap-5 items-center">
                                        <Link className='text-[#FF6B00]' to={"/"}>Login</Link>
                                        <Link to={"/"} className='bg-[#0094FF] py-[1vh] px-[2vw] rounded-full text-white'>Get Started</Link>
                                </div>
                        </div>
                </div>
        )
}

export default Navbar