import React, { useState } from 'react'
import FileInput from './FileInput'

const HomeIntro = () => {
        const [selectedImage, setSelectedImage] = useState<File | null>(null)
        const [selectedButtonForm,setSelectedButtonForm] = useState("Stock")
        return (
                <div className='flex flex-col md:flex-row gap-[5vw] text-[2vw] md:text-[1.05vw]  px-[5vw] py-[4vh] sm:px-[7.5vw] sm:py-[8vh]'>
                        <img src="/image/blur1.png" alt="" className='absolute top-0 right-0 w-[20vw]' />
                        <img src="/image/blur2.png" alt="" className='absolute top-[20vh]  left-0 w-[20vw]' />
                        <div className='w-full md:w-[55%]'>
                                <p className='font-bold text-[#00192C] text-[4vw] sm:text-[2.1vw] my-[1vh]'>Introducing the future of Trading: A.I. Empowered Feedback for Your Trade Plans</p>
                                <p className='text-[#6C6C6C] my-[1vh]'>Say goodbye to uncertainty and hello to confidence! Our state-of-the-art A.I. technology analyzes your trade plan in real-time, providing you with personalized feedback that's exclusively sent to you via private email. .</p>
                                <div className="flex flex-row  justify-center items-center">
                                        <div className='w-[40%] sm:w-[30%] '>
                                                <button className='bg-[#FF6B00] px-[1vw] py-[.5vh] sm:px-[2vw] sm:py-[1vh] rounded-full text-white my-[1vh]'>Get Started</button>
                                                <p className='my-[8vh] text-[#0094FF] font-medium'>Watch how</p>
                                        </div>
                                        <div className='relative  w-[60%] flex items-center justify-center'>
                                                <img src="/image/homeintro.png" alt="" className='w-[80%]' />
                                                <img src="/image/playC.png" alt="" className='absolute top-[44%] md:top-[45%] left-[44%] w-[5vw] md:w-[3vw]' />
                                                <img src="/image/playR.png" alt="" className='absolute top-[47%] md:top-[50%] left-[47%] w-[2vw] md:w-[1vw]' />
                                        </div>
                                </div>
                        </div>
                        <div className="w-full md:w-[45%] flex items-center justify-center">
                                <div className=' border-gradient p-[2vw] rounded-[2vw] text-center w-full'>
                                        <p className='text-[#391800] font-semibold text-[3vw] md:text-[1.6vw] my-[2vh]'>Get feedback on your trade</p>
                                        <div className='text-left my-[1vh]'>
                                                <p className='text-[1.8vw] md:text-[0.8vw] text-[#676767]'>Asset</p>
                                                <div className="flex flex-row gap-2">
                                                        <button  className={selectedButtonForm === "Stock" ? 'bg-[#FF6B00] text-white px-2 py-1 rounded-md':'bg-[rgba(255,107,0,0.06)] text-[#FF6B00] px-2 py-1 rounded-md'} onClick={()=>setSelectedButtonForm("Stock")}>Stock</button>
                                                        <button className={selectedButtonForm === "Forex" ? 'bg-[#FF6B00] text-white px-2 py-1 rounded-md':'bg-[rgba(255,107,0,0.06)] text-[#FF6B00] px-2 py-1 rounded-md'} onClick={()=>setSelectedButtonForm("Forex")}>Forex</button>
                                                        <button  className={selectedButtonForm === "Crypto" ? 'bg-[#FF6B00] text-white px-2 py-1 rounded-md':'bg-[rgba(255,107,0,0.06)] text-[#FF6B00] px-2 py-1 rounded-md'} onClick={()=>setSelectedButtonForm("Crypto")}>Crypto</button>
                                                </div>
                                                <input type="text" placeholder='USD' className='outline-none bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                <div className="flex flex-row gap-2 my-[1vh]">
                                                        <button className='bg-[#47BB00] px-2 py-1 rounded-md text-white'>Buy</button>
                                                        <button className='bg-[#E10000] px-2 py-1 rounded-md text-white'>Sell</button>
                                                </div>
                                                <div className="flex flex-row gap-2 justify-between">
                                                        <div className="w-[30%]">
                                                                <p className='text-[1.8vw] md:text-[0.8vw] text-[#676767] font-medium'>Asset</p>
                                                                <select name="" id="" className='outline-none bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                </select>
                                                        </div>
                                                        <div className="w-[30%]">
                                                                <p className='text-[1.8vw] md:text-[0.8vw] text-[#676767] font-medium'> Target</p>
                                                                <select name="" id="" className='outline-none bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                </select>
                                                        </div>
                                                        <div className="w-[30%]">
                                                                <p className='text-[1.8vw] md:text-[0.8vw] text-[#676767] font-medium'>Short</p>
                                                                <select name="" id="" className='outline-none bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                        <option value="">USD</option>
                                                                </select>
                                                        </div>
                                                </div>
                                                <div>
                                                        <p className='text-[1.8vw] md:text-[0.8vw] text-[#676767]'>Plan Image</p>
                                                        {/* <input type="file" name="" id="" className='text-[1.8vw] md:text-[0.8vw] text-[#676767] bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]  file:bg-[rgba(0,148,255,0.06)] file:text-[#0094FF] file:border-none file:rounded-md' /> */}
                                                        <FileInput selectedFile={selectedImage} setSelectedFile={setSelectedImage} />
                                                </div>
                                                <input type="submit" value="Submit" className='bg-[#0094FF] px-[2vw] py-[1vh] rounded-full w-full  h-fit text-white my-[1vh]' />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default HomeIntro