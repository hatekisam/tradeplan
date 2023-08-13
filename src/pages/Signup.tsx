import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
        return (
                <div className='w-full h-[100vh] overflow-hidden flex  flex-col md:flex-row justify-center md:justify-between items-center px-[8vw] bg-[#F8FFFB]  gap-[5vw]'>
                        <Link to={"/"}>
                                <div className="absolute top-[5vh] left-[5vw] flex flex-row gap-2 items-center">
                                        <img src="/svg/logo.svg" alt="" className='w-[5vw] sm:w-[2.6vw]' />
                                        <p className='text-[#FF6B00]  text-[3vw] sm:text-[1.05vw]'>TradePlans<span className='text-[#0094FF]'>.AI</span></p>
                                </div>
                        </Link>
                        <img src="/image/signup2.png" alt="" className='absolute left-0 top-[20vh] w-[20vw] ' />
                        <div className="hidden md:flex w-[50%]  items-center justify-center z-10 ">
                                <img src="/image/signup.png" alt="" className='w-[30vw]' />
                        </div>
                        <div className='w-full md:w-[50%] bg-white rounded-[1.05vw] p-[2vw] z-30'>
                                <p className='my-[1vh] font-extrabold text-[4vw] md:text-[2vw]'>Create Account</p>
                                <p className='text-[2.4vw] md:text-[1.2vw] font-semibold my-[1vh]'>Sign up with your email for registration</p>
                                <form className='mt-[2vh] text-[2.2vw] md:text-[1.05vw] '>
                                        <div className="flex flex-col sm:flex-row justify-between gap-[1.5vw] my-[1vh]">
                                                <div className='w-fll sm:w-[50%]'>
                                                        <label htmlFor="name" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Name</label>
                                                        <div className='w-full relative'>
                                                                <input type="text" className='outline-none border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[6vw] md:pl-[2.2vw]' placeholder='Fist Name' />
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="29" viewBox="0 0 22 29" fill="none" className='absolute  left-[3.2%] top-[2.5vw] md:top-[2vh]  w-[3vw] md:w-[1.4vw]'>
                                                                        <path d="M0 28.875C0 25.9576 1.15893 23.1597 3.22183 21.0968C5.28473 19.0339 8.08262 17.875 11 17.875C13.9174 17.875 16.7153 19.0339 18.7782 21.0968C20.8411 23.1597 22 25.9576 22 28.875H19.25C19.25 26.687 18.3808 24.5885 16.8336 23.0414C15.2865 21.4942 13.188 20.625 11 20.625C8.81196 20.625 6.71354 21.4942 5.16637 23.0414C3.61919 24.5885 2.75 26.687 2.75 28.875H0ZM11 16.5C6.44187 16.5 2.75 12.8081 2.75 8.25C2.75 3.69187 6.44187 0 11 0C15.5581 0 19.25 3.69187 19.25 8.25C19.25 12.8081 15.5581 16.5 11 16.5ZM11 13.75C14.0387 13.75 16.5 11.2887 16.5 8.25C16.5 5.21125 14.0387 2.75 11 2.75C7.96125 2.75 5.5 5.21125 5.5 8.25C5.5 11.2887 7.96125 13.75 11 13.75Z" fill="black" fill-opacity="0.4" />
                                                                </svg>
                                                        </div>
                                                </div>
                                                <div className='w-full sm:w-[50%]'>
                                                        <label htmlFor="email" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Email</label>
                                                        <div className='w-full relative'>
                                                                <input type="email" className='outline-none border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[5.5vw] md:pl-[2.2vw]' placeholder='Email' />
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none" className='absolute  left-[3.2%] top-[1vh] md:top-[2vh]  w-[3vw] md:w-[1.5vw]'>
                                                                        <path d="M1.16667 0H22.1667C22.4761 0 22.7728 0.122916 22.9916 0.341709C23.2104 0.560501 23.3333 0.857247 23.3333 1.16667V19.8333C23.3333 20.1428 23.2104 20.4395 22.9916 20.6583C22.7728 20.8771 22.4761 21 22.1667 21H1.16667C0.857247 21 0.560501 20.8771 0.341709 20.6583C0.122916 20.4395 0 20.1428 0 19.8333V1.16667C0 0.857247 0.122916 0.560501 0.341709 0.341709C0.560501 0.122916 0.857247 0 1.16667 0ZM21 4.94433L11.7507 13.2277L2.33333 4.91867V18.6667H21V4.94433ZM2.9295 2.33333L11.7378 10.1057L20.419 2.33333H2.9295Z" fill="black" fill-opacity="0.4" />
                                                                </svg>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex  flex-col sm:flex-row justify-between gap-[1.5vw] my-[1vh]">
                                                <div className=' w-full sm:w-[50%]'>
                                                        <label htmlFor="phone" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Phone</label>
                                                        <div className='w-full relative'>
                                                                <input type="text" className='outline-none border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[5.5vw] md:pl-[2.2vw]' placeholder='Phone' />
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='absolute  left-[3.2%] top-[1vh] md:top-[2vh]  w-[3vw] md:w-[1.5vw]'>
                                                                        <path d="M6.36556 7.6821C7.302 9.3288 8.6712 10.698 10.3179 11.6344L11.2024 10.3961C11.4965 9.9845 12.0516 9.8573 12.4956 10.0998C13.9024 10.8683 15.4571 11.3353 17.0789 11.4637C17.599 11.5049 18 11.9389 18 12.4606V16.9234C18 17.4361 17.6122 17.8657 17.1022 17.9181C16.5723 17.9726 16.0377 18 15.5 18C6.93959 18 0 11.0604 0 2.5C0 1.96227 0.0274201 1.42771 0.0818901 0.89776C0.1343 0.38775 0.56394 0 1.07665 0H5.53942C6.0611 0 6.49513 0.40104 6.5363 0.92109C6.66467 2.54288 7.1317 4.09764 7.9002 5.50444C8.1427 5.9484 8.0155 6.50354 7.6039 6.79757L6.36556 7.6821ZM3.84425 7.0252L5.7442 5.66809C5.20547 4.50514 4.83628 3.27183 4.64727 2H2.00907C2.00303 2.16632 2 2.333 2 2.5C2 9.9558 8.0442 16 15.5 16C15.667 16 15.8337 15.997 16 15.9909V13.3527C14.7282 13.1637 13.4949 12.7945 12.3319 12.2558L10.9748 14.1558C10.4258 13.9425 9.8956 13.6915 9.3874 13.4061L9.3293 13.373C7.3697 12.2587 5.74134 10.6303 4.627 8.6707L4.59394 8.6126C4.30849 8.1044 4.05754 7.5742 3.84425 7.0252Z" fill="#999999" />
                                                                </svg>
                                                        </div>
                                                </div>
                                                <div className='w-full sm:w-[50%]'>
                                                        <label htmlFor="country" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Country</label>
                                                        <div className='w-full relative'>
                                                                <input type="text" className='outline-none border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[5.5vw] md:pl-[2.2vw]' placeholder='City' />
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="27" viewBox="0 0 22 27" fill="none" className='absolute  left-[3.2%] top-[1vh] md:top-[2vh]  w-[3vw] md:w-[1.5vw]'>
                                                                        <path d="M11 23.0999L17.05 17.0499C18.2464 15.8533 19.0612 14.3289 19.3912 12.6693C19.7213 11.0097 19.5518 9.28952 18.9042 7.72625C18.2566 6.16298 17.1601 4.82683 15.7531 3.88678C14.3462 2.94672 12.6921 2.44497 11 2.44497C9.30791 2.44497 7.65382 2.94672 6.24688 3.88678C4.83995 4.82683 3.74336 6.16298 3.09578 7.72625C2.44821 9.28952 2.27873 11.0097 2.60878 12.6693C2.93882 14.3289 3.75357 15.8533 4.95 17.0499L11 23.0999ZM11 26.5563L3.22178 18.7781C1.68342 17.2397 0.635783 15.2797 0.211357 13.1459C-0.213069 11.0122 0.00477503 8.80043 0.837343 6.79045C1.66991 4.78047 3.07981 3.06251 4.88874 1.85382C6.69768 0.645135 8.82441 0 11 0C13.1756 0 15.3023 0.645135 17.1113 1.85382C18.9202 3.06251 20.3301 4.78047 21.1627 6.79045C21.9952 8.80043 22.2131 11.0122 21.7886 13.1459C21.3642 15.2797 20.3166 17.2397 18.7782 18.7781L11 26.5563ZM11 13.4443C11.6483 13.4443 12.2701 13.1868 12.7285 12.7284C13.1869 12.27 13.4444 11.6482 13.4444 10.9999C13.4444 10.3516 13.1869 9.72984 12.7285 9.27142C12.2701 8.813 11.6483 8.55546 11 8.55546C10.3517 8.55546 9.72994 8.813 9.27152 9.27142C8.8131 9.72984 8.55556 10.3516 8.55556 10.9999C8.55556 11.6482 8.8131 12.27 9.27152 12.7284C9.72994 13.1868 10.3517 13.4443 11 13.4443ZM11 15.8888C9.70339 15.8888 8.45988 15.3737 7.54304 14.4569C6.62619 13.54 6.11111 12.2965 6.11111 10.9999C6.11111 9.70329 6.62619 8.45978 7.54304 7.54293C8.45988 6.62609 9.70339 6.11101 11 6.11101C12.2966 6.11101 13.5401 6.62609 14.457 7.54293C15.3738 8.45978 15.8889 9.70329 15.8889 10.9999C15.8889 12.2965 15.3738 13.54 14.457 14.4569C13.5401 15.3737 12.2966 15.8888 11 15.8888Z" fill="black" fill-opacity="0.4" />
                                                                </svg>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='my-[1vh]'>
                                                <label htmlFor="email" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Password</label>
                                                <div className='w-full relative'>
                                                        <input type="password" className='outline-none border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[5.5vw] md:pl-[2.2vw]' placeholder='Password' />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className='absolute  right-[2%] top-[1vh] md:top-[2vh]  w-[3vw] md:w-[1.5vw]'>
                                                                <path d="M16.701 17.904C14.9422 19.0196 12.9017 19.6103 10.819 19.607C5.427 19.607 0.941 15.727 0 10.607C0.43003 8.27772 1.60163 6.1499 3.34 4.541L0.211 1.415L1.626 0L21.425 19.8L20.01 21.214L16.701 17.904ZM4.754 5.957C3.395 7.19259 2.44832 8.81578 2.042 10.607C2.35429 11.9735 2.98126 13.2481 3.873 14.3296C4.76474 15.411 5.89663 16.2694 7.17855 16.8363C8.46048 17.4032 9.85705 17.6631 11.2571 17.5951C12.6571 17.5272 14.022 17.1334 15.243 16.445L13.215 14.417C12.3517 14.9608 11.3292 15.1951 10.3152 15.0814C9.30128 14.9678 8.35604 14.5129 7.63457 13.7914C6.9131 13.07 6.45823 12.1247 6.34456 11.1108C6.2309 10.0968 6.46518 9.07431 7.009 8.211L4.754 5.957ZM11.733 12.935L8.491 9.693C8.31306 10.1459 8.27119 10.641 8.37051 11.1173C8.46982 11.5937 8.70602 12.0308 9.05012 12.3749C9.39422 12.719 9.83127 12.9552 10.3077 13.0545C10.784 13.1538 11.2791 13.1119 11.732 12.934L11.733 12.935ZM19.626 15.199L18.195 13.769C18.8635 12.8163 19.3394 11.7422 19.596 10.607C19.3242 9.41673 18.8133 8.29415 18.0941 7.30749C17.375 6.32084 16.4628 5.49073 15.4129 4.8676C14.363 4.24448 13.1973 3.84137 11.9867 3.68276C10.7762 3.52416 9.54601 3.61338 8.371 3.945L6.793 2.367C8.04 1.877 9.399 1.607 10.819 1.607C16.211 1.607 20.697 5.487 21.638 10.607C21.3316 12.2727 20.6429 13.8446 19.626 15.199ZM10.542 6.115C11.1785 6.07566 11.8161 6.17207 12.4125 6.39782C13.009 6.62357 13.5506 6.97351 14.0015 7.42445C14.4525 7.87539 14.8024 8.41703 15.0282 9.01346C15.2539 9.60989 15.3503 10.2475 15.311 10.884L10.542 6.115Z" fill="#626262" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none" className='absolute  left-[2%] top-[1vh] md:top-[2vh]  w-[3vw] md:w-[1.5vw] '>
                                                                <path d="M18.3333 8.55556H20.7778C21.1019 8.55556 21.4128 8.68433 21.642 8.91354C21.8712 9.14275 22 9.45362 22 9.77778V24.4444C22 24.7686 21.8712 25.0795 21.642 25.3087C21.4128 25.5379 21.1019 25.6667 20.7778 25.6667H1.22222C0.898069 25.6667 0.587192 25.5379 0.357981 25.3087C0.128769 25.0795 0 24.7686 0 24.4444V9.77778C0 9.45362 0.128769 9.14275 0.357981 8.91354C0.587192 8.68433 0.898069 8.55556 1.22222 8.55556H3.66667V7.33333C3.66667 5.38841 4.43928 3.52315 5.81455 2.14788C7.18982 0.772617 9.05508 0 11 0C12.9449 0 14.8102 0.772617 16.1854 2.14788C17.5607 3.52315 18.3333 5.38841 18.3333 7.33333V8.55556ZM2.44444 11V23.2222H19.5556V11H2.44444ZM9.77778 15.8889H12.2222V18.3333H9.77778V15.8889ZM4.88889 15.8889H7.33333V18.3333H4.88889V15.8889ZM14.6667 15.8889H17.1111V18.3333H14.6667V15.8889ZM15.8889 8.55556V7.33333C15.8889 6.03672 15.3738 4.79321 14.457 3.87637C13.5401 2.95952 12.2966 2.44444 11 2.44444C9.70339 2.44444 8.45988 2.95952 7.54303 3.87637C6.62619 4.79321 6.11111 6.03672 6.11111 7.33333V8.55556H15.8889Z" fill="black" fill-opacity="0.4" />
                                                        </svg>
                                                </div>
                                        </div>
                                        <input type="submit" value="Sign Up" className='text-white bg-[#FF6B00] w-full  px-[2.5vw] py-[2vh] rounded-md my-[2vh]' />
                                </form>
                                <p className='my-[2vh] text-[2.2vw] md:text-[1.05vw] text-center'>Already have an account,<Link className='font-bold text-[#FF6B00]' to={"/login"}>Login</Link></p>
                        </div>
                </div>
        )
}

export default Signup