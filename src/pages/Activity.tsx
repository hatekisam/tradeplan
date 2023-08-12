import React, { useState } from 'react'
import image from "../assets/planImage.png"
import { modelStore } from '../utils/store'

const Activity = () => {
        const openModel = modelStore((state: any) => state.openModel)
        const modelOpen = modelStore((state: any) => state.modelOpen)
        return (
                <div className=' p-[1vw] h-[100vh]'>
                        <div className="w-full h-full bg-white rounded-[2vw] p-[2vw] overflow-y-auto">
                                <div>
                                        <p className='mt-[5.2vw] sm:mt-[0.5vh] text-[2.2vw] md:text-[.8vw] text-[#676767] font-medium my-[0.5vh]'>Sort By</p>
                                        <div className="flex flex-row justify-between text-[2vw] md:text-[1.2vw]">
                                                <div className="flex flex-row gap-[1vw] items-center    ">
                                                        <select name="" id="" className='bg-[#EAEAEA] outline-none rounded-md w-fit px-[1vw] py-[.5vh] md:px-[2vw] md:py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                <option value="">Start Date</option>
                                                                <option value="">End Date</option>
                                                                <option value="">Result</option>
                                                        </select>
                                                        <input type="text" placeholder='Search' className='bg-[#EAEAEA] outline-none rounded-md w-[50vw] md:w-[40vw] px-[1vw] py-[.5vh] md:px-[2vw] md:py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                </div>
                                                <button onClick={()=>{openModel();console.log(modelOpen)}} className='bg-[#0094FF] px-[1vw] py-[.5vh] md:px-[2vw] md:py-[1vh] rounded-full h-fit text-white my-[1vh] flex flex-row gap-[0.5vw] items-center '>
                                                        <img src="/svg/add.svg" alt="" className='w-[2vw] md:w-[1vw]' />
                                                        <p>Add Trade Plan</p>
                                                </button>
                                        </div>
                                        <div className='py-[2vh]'>
                                                <div className="flex flex-row justify-between">
                                                        <p className='text-[#FF6B00] font-medium text-[3.2vw] md:text-[1.6vw]'>Buying Forex: EURJPY</p>
                                                        <p className='bg-[rgba(0,148,255,0.09)] rounded-md text-[rgba(0,148,255,1)] text-[2vw] md:text-[.8vw] py-[1vh] px-[2vw] h-fit'>08/03/2023 02:46:21 PM</p>
                                                </div>
                                                <div className="flex flex-row gap-[1vw] my-[1vh]">
                                                        <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[2vw] md:text-[.8vw] py-[1vh] px-[2vw] h-fit'>Assets : EURJPY.FOREX</p>
                                                        <p className='bg-[rgba(36,255,0,0.08)] rounded-md text-[#0EAB00] text-[2vw] md:text-[.8vw] py-[1vh] px-[2vw] h-fit'>Action : Buy</p>
                                                        <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[2vw] md:text-[.8vw] py-[1vh] px-[2vw] h-fit'>Entry : 132.4</p>
                                                        <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[2vw] md:text-[.8vw] py-[1vh] px-[2vw] h-fit'>Target : 132.4</p>
                                                        <p className='bg-[rgba(255,0,0,0.08)] rounded-md text-[#E00000] text-[2vw] md:text-[.8vw] py-[1vh] px-[2vw] h-fit'>Stop : 132.4</p>
                                                </div>
                                                <img src={image} alt="" className='w-full' />
                                                <div className='my-[1vh] flex flex-row gap-[1vw] text-[2vw] md:text-[1.05vw]'>
                                                        <button className='text-white bg-[#009D36] px-[1vw] py-[.5vh] md:px-[2vw] md:py-[1vh] rounded-full h-fit  my-[1vh]'>Agree</button>
                                                        <button className='text-white bg-[#B70000] px-[1vw] py-[.5vh] md:px-[2vw] md:py-[1vh] rounded-full h-fit  my-[1vh]'>Disagree</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Activity