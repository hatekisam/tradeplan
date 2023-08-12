import React, { useState } from 'react'
import image from "../assets/planImage.png"

const Activity = () => {
        const [addingTradePlan, setAddingTradePlan] = useState(false)
        return (
                <div className='p-[1vw] h-[100vh]'>
                        {addingTradePlan && (
                                <div className="absolute w-[100vw] h-[97vh] flex justify-center items-center left-0 top-0">
                                        <div className='w-[45vw] border-gradient  p-[2vw] rounded-[2vw] text-center'>
                                                <p className='text-[#391800] font-semibold text-[1.6vw] my-[2vh]'>Get feedback on your trade</p>
                                                <div className='text-left my-[1vh]'>
                                                        <p className='text-[0.8vw] text-[#676767]'>Asset</p>
                                                        <div className="flex flex-row gap-2">
                                                                <button className='bg-[#FF6B00] text-white px-2 py-1 rounded-md'>Stock</button>
                                                                <button className='bg-[rgba(255,107,0,0.06)] text-[#FF6B00] px-2 py-1 rounded-md'>Forex</button>
                                                                <button className='bg-[rgba(255,107,0,0.06)] text-[#FF6B00] px-2 py-1 rounded-md'>Crypto</button>
                                                        </div>
                                                        <input type="text" placeholder='USD' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                        <div className="flex flex-row gap-2 my-[1vh]">
                                                                <button className='bg-[#47BB00] px-2 py-1 rounded-md text-white'>Buy</button>
                                                                <button className='bg-[#E10000] px-2 py-1 rounded-md text-white'>Sell</button>
                                                        </div>
                                                        <div className="flex flex-row gap-2 justify-between">
                                                                <div className="w-[30%]">
                                                                        <p className='text-[0.8vw] text-[#676767] font-medium'>Asset</p>
                                                                        <select name="" id="" className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                        </select>
                                                                </div>
                                                                <div className="w-[30%]">
                                                                        <p className='text-[0.8vw] text-[#676767] font-medium'> Target</p>
                                                                        <select name="" id="" className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                        </select>
                                                                </div>
                                                                <div className="w-[30%]">
                                                                        <p className='text-[0.8vw] text-[#676767] font-medium'>Short</p>
                                                                        <select name="" id="" className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                                <option value="">USD</option>
                                                                        </select>
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <p className='text-[0.8vw] text-[#676767]'>Plan Image</p>
                                                                <input type="file" name="" id="" className='text-[0.8vw] text-[#676767] bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                        </div>
                                                        <input type="submit" value="Submit"  className='bg-[#0094FF] px-[2vw] py-[1vh] rounded-full w-full  h-fit text-white my-[1vh]'/>
                                                </div>
                                        </div>
                                </div>
                        )}
                        <div className="w-full h-full bg-white rounded-[2vw] p-[2vw] overflow-y-auto">
                                <div>
                                        <p className='text-[.8vw] text-[#676767] font-medium my-[0.5vh]'>Sort By</p>
                                        <div className="flex flex-row justify-between">
                                                <div className="flex flex-row gap-[1vw]">
                                                        <select name="" id="" className='bg-[#EAEAEA] outline-none rounded-md w-fit px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                        </select>
                                                        <input type="text" placeholder='Search' className='bg-[#EAEAEA] outline-none rounded-md w-[40vw] px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                </div>
                                                <button onClick={() => setAddingTradePlan(true)} className='bg-[#0094FF] px-[2vw] py-[1vh] rounded-full h-fit text-white my-[1vh] flex flex-row gap-[0.5vw] items-center'>
                                                        <img src="/svg/add.svg" alt="" className='w-[1vw]' />
                                                        <p>Add Trade Plan</p>
                                                </button>
                                        </div>
                                        <div className='py-[2vh]'>
                                                <div className="flex flex-row justify-between">
                                                        <p className='text-[#FF6B00] font-medium text-[1.6vw]'>Buying Forex: EURJPY</p>
                                                        <p className='bg-[rgba(0,148,255,0.09)] rounded-md text-[rgba(0,148,255,1)] text-[.8vw] py-[1vh] px-[2vw] h-fit'>08/03/2023 02:46:21 PM</p>
                                                </div>
                                                <div className="flex flex-row gap-[1vw] my-[1vh]">
                                                        <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[.8vw] py-[1vh] px-[2vw] h-fit'>Assets : EURJPY.FOREX</p>
                                                        <p className='bg-[rgba(36,255,0,0.08)] rounded-md text-[#0EAB00] text-[.8vw] py-[1vh] px-[2vw] h-fit'>Action : Buy</p>
                                                        <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[.8vw] py-[1vh] px-[2vw] h-fit'>Entry : 132.4</p>
                                                        <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[.8vw] py-[1vh] px-[2vw] h-fit'>Target : 132.4</p>
                                                        <p className='bg-[rgba(255,0,0,0.08)] rounded-md text-[#E00000] text-[.8vw] py-[1vh] px-[2vw] h-fit'>Stop : 132.4</p>
                                                </div>
                                                <img src={image} alt="" className='w-full' />
                                                <div className='my-[1vh] flex flex-row gap-[1vw]'>
                                                        <button className='text-white bg-[#009D36] px-[2vw] py-[1vh] rounded-full h-fit  my-[1vh]'>Agree</button>
                                                        <button className='text-white bg-[#B70000] px-[2vw] py-[1vh] rounded-full h-fit  my-[1vh]'>Disagree</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Activity