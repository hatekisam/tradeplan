import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
        const [mobileNav, setMobileNav] = useState(false)
        return (
                <div className='fixed top-0 left-0 w-full border-[#0094FF] border-b z-50 bg-white'>
                        <div className="flex flex-row px-[8vw] py-[2vh] justify-between text-[1.2vw] sm:text-[1.5vw]  lg:text-[1.02vw]  relative">
                                {mobileNav && (
                                        <div className="block sm:hidden absolute bg-white w-[50vw] top-[105%] right-[1vw] rounded-md border-2 border-[#FF6B00] text-[2.5vw] py-[1vh] px-[1vw]">
                                                <div className="flex sm:hidden flex-col gap-[1vh] items-center text-[#939393]" onClick={()=>setMobileNav(false)}>
                                                        <Link to={"/"}>Home</Link>
                                                        <Link to={"/feedback"}>Feedback</Link>
                                                        <Link to={"/about"}>About Us</Link>
                                                        <Link to={"/contact"}>Contact Us</Link>
                                                        <Link to={"/donate"}>Donate</Link>
                                                        <Link className='text-[#FF6B00]' to={"/login"}>Login</Link>
                                                        <Link to={"/signup"} className='bg-[#0094FF] py-[1vh] px-[2vw] rounded-full text-white w-full text-center ' >Get Started</Link>
                                                </div>
                                        </div>
                                )}
                                <div className="flex flex-row gap-2 items-center">
                                        <img src="/svg/logo.svg" alt="" className='w-[5vw] sm:w-[2.6vw]' />
                                        <p className='text-[#FF6B00]  text-[3vw] sm:text-[1.05vw]'>TradePlans<span className='text-[#0094FF]'>.AI</span></p>
                                </div>
                                <button className="block sm:hidden" onClick={() => setMobileNav(!mobileNav)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[3vw] h-5 fill-black">
                                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                        </svg>
                                </button>
                                <div className="hidden sm:flex flex-row gap-2 items-center text-[#939393]">
                                        <Link to={"/"}>Home</Link>
                                        <Link to={"/feedback"}>Feedback</Link>
                                        <Link to={"/about"}>About Us</Link>
                                        <Link to={"/contact"}>Contact Us</Link>
                                        <Link to={"/donate"}>Donate</Link>
                                </div>
                                <div className="hidden sm:flex flex-row gap-5 items-center">
                                        <Link className='text-[#FF6B00]' to={"/login"}>Login</Link>
                                        <Link to={"/signup"} className='bg-[#0094FF] py-[1vh] px-[2vw] rounded-full text-white'>Get Started</Link>
                                </div>
                        </div>
                </div>
        )
}

export default Navbar