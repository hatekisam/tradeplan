import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
        return (
                <div className='w-full h-[100vh] overflow-hidden flex flex-col md:flex-row justify-center md:justify-between items-center bg-[#F8FFFB] px-[8vw] py-[10vh] gap-[5vw]'>
                        <div className="absolute top-[5vh] left-[5vw] flex flex-row gap-2 items-center">
                                <img src="/svg/logo.svg" alt="" className='w-[5vw] sm:w-[2.6vw]' />
                                <p className='text-[#FF6B00]  text-[3vw] sm:text-[1.05vw]'>TradePlans<span className='text-[#0094FF]'>.AI</span></p>
                        </div>
                        <div className="hidden md:flex w-[50%]  items-center justify-center z-10 ">
                                <img src="/image/login.png" alt="" className='w-[30vw]' />
                        </div>
                        <div className='w-full md:w-[50%] bg-white rounded-[1.05vw] p-[2vw]'>
                                <p className='my-[1vh] font-extrabold text-[4vw] md:text-[2vw]'>Sign In</p>
                                <p className='text-[2.4vw] md:text-[1.2vw] font-semibold my-[1vh]'>Sign in into your account</p>
                                <form className='mt-[2vh] text-[2.5vw] md:text-[1.05vw] '>
                                        <div className='my-[1.3vw]'>
                                                <label htmlFor="email" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Email</label>
                                                <div className='w-full relative'>
                                                        <input type="email" className='border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[5vw] md:pl-[2.5vw]' placeholder='Email' />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none" className='absolute  left-[2%] top-[1vh] md:top-[2vh]  w-[3vw] md:w-[1.5vw]'>
                                                                <path d="M1.16667 0H22.1667C22.4761 0 22.7728 0.122916 22.9916 0.341709C23.2104 0.560501 23.3333 0.857247 23.3333 1.16667V19.8333C23.3333 20.1428 23.2104 20.4395 22.9916 20.6583C22.7728 20.8771 22.4761 21 22.1667 21H1.16667C0.857247 21 0.560501 20.8771 0.341709 20.6583C0.122916 20.4395 0 20.1428 0 19.8333V1.16667C0 0.857247 0.122916 0.560501 0.341709 0.341709C0.560501 0.122916 0.857247 0 1.16667 0ZM21 4.94433L11.7507 13.2277L2.33333 4.91867V18.6667H21V4.94433ZM2.9295 2.33333L11.7378 10.1057L20.419 2.33333H2.9295Z" fill="black" fill-opacity="0.4" />
                                                        </svg>
                                                </div>
                                        </div>
                                        <div className='my-[1.3vw]'>
                                                <label htmlFor="email" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Password</label>
                                                <div className='w-full relative'>
                                                        <input type="password" className='border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[5vw]  md:pl-[2.5vw]' placeholder='Password' />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className='absolute  right-[2%] top-[1vh] md:top-[2vh]  w-[3vw] md:w-[1.5vw]'>
                                                                <path d="M16.701 17.904C14.9422 19.0196 12.9017 19.6103 10.819 19.607C5.427 19.607 0.941 15.727 0 10.607C0.43003 8.27772 1.60163 6.1499 3.34 4.541L0.211 1.415L1.626 0L21.425 19.8L20.01 21.214L16.701 17.904ZM4.754 5.957C3.395 7.19259 2.44832 8.81578 2.042 10.607C2.35429 11.9735 2.98126 13.2481 3.873 14.3296C4.76474 15.411 5.89663 16.2694 7.17855 16.8363C8.46048 17.4032 9.85705 17.6631 11.2571 17.5951C12.6571 17.5272 14.022 17.1334 15.243 16.445L13.215 14.417C12.3517 14.9608 11.3292 15.1951 10.3152 15.0814C9.30128 14.9678 8.35604 14.5129 7.63457 13.7914C6.9131 13.07 6.45823 12.1247 6.34456 11.1108C6.2309 10.0968 6.46518 9.07431 7.009 8.211L4.754 5.957ZM11.733 12.935L8.491 9.693C8.31306 10.1459 8.27119 10.641 8.37051 11.1173C8.46982 11.5937 8.70602 12.0308 9.05012 12.3749C9.39422 12.719 9.83127 12.9552 10.3077 13.0545C10.784 13.1538 11.2791 13.1119 11.732 12.934L11.733 12.935ZM19.626 15.199L18.195 13.769C18.8635 12.8163 19.3394 11.7422 19.596 10.607C19.3242 9.41673 18.8133 8.29415 18.0941 7.30749C17.375 6.32084 16.4628 5.49073 15.4129 4.8676C14.363 4.24448 13.1973 3.84137 11.9867 3.68276C10.7762 3.52416 9.54601 3.61338 8.371 3.945L6.793 2.367C8.04 1.877 9.399 1.607 10.819 1.607C16.211 1.607 20.697 5.487 21.638 10.607C21.3316 12.2727 20.6429 13.8446 19.626 15.199ZM10.542 6.115C11.1785 6.07566 11.8161 6.17207 12.4125 6.39782C13.009 6.62357 13.5506 6.97351 14.0015 7.42445C14.4525 7.87539 14.8024 8.41703 15.0282 9.01346C15.2539 9.60989 15.3503 10.2475 15.311 10.884L10.542 6.115Z" fill="#626262" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none" className='absolute  left-[2%] top-[1vh] md:top-[2vh]  w-[3vw] md:w-[1.5vw] '>
                                                                <path d="M18.3333 8.55556H20.7778C21.1019 8.55556 21.4128 8.68433 21.642 8.91354C21.8712 9.14275 22 9.45362 22 9.77778V24.4444C22 24.7686 21.8712 25.0795 21.642 25.3087C21.4128 25.5379 21.1019 25.6667 20.7778 25.6667H1.22222C0.898069 25.6667 0.587192 25.5379 0.357981 25.3087C0.128769 25.0795 0 24.7686 0 24.4444V9.77778C0 9.45362 0.128769 9.14275 0.357981 8.91354C0.587192 8.68433 0.898069 8.55556 1.22222 8.55556H3.66667V7.33333C3.66667 5.38841 4.43928 3.52315 5.81455 2.14788C7.18982 0.772617 9.05508 0 11 0C12.9449 0 14.8102 0.772617 16.1854 2.14788C17.5607 3.52315 18.3333 5.38841 18.3333 7.33333V8.55556ZM2.44444 11V23.2222H19.5556V11H2.44444ZM9.77778 15.8889H12.2222V18.3333H9.77778V15.8889ZM4.88889 15.8889H7.33333V18.3333H4.88889V15.8889ZM14.6667 15.8889H17.1111V18.3333H14.6667V15.8889ZM15.8889 8.55556V7.33333C15.8889 6.03672 15.3738 4.79321 14.457 3.87637C13.5401 2.95952 12.2966 2.44444 11 2.44444C9.70339 2.44444 8.45988 2.95952 7.54303 3.87637C6.62619 4.79321 6.11111 6.03672 6.11111 7.33333V8.55556H15.8889Z" fill="black" fill-opacity="0.4" />
                                                        </svg>
                                                </div>
                                                <Link to={"/forgot-password"} className='font-bold'>Forgot password?</Link>
                                        </div>
                                        <input type="submit" value="Log In" className='text-white bg-[#0094FF] w-full  px-[2.5vw] py-[2vh] rounded-md' />
                                </form>
                                <div>
                                        <p className='font-medium text-[2.2vw] md:text-[1.05vw] my-[2vh] text-center'>OR</p>
                                        <button className=" text-[2.2vw] md:text-[1.05vw] flex flex-row gap-1 items-center justify-center  w-full  px-[1vw] md:px-[2vw] py-[1vh] rounded-md border-[2px] border-[rgba(0,0,0,0.4)]">
                                                <img src="/image/google.png" alt="Google" className='w-[4vw] md:w-[1.8vw]'/>
                                                <p>Continue with Google </p>
                                        </button>
                                </div>
                                <p className='my-[1vh] md:my-[2vh] text-[2vw] md:text-[1.05vw] text-center'>Don't have an account ,<Link className='font-bold text-[#0094FF]' to={"/signup"}>Sign Up</Link></p>
                        </div>
                </div>
        )
}

export default Login