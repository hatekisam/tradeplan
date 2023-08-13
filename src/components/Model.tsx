import React, { useState } from 'react'
import FileInput from './FileInput'
import { modelStore } from '../utils/store'

const Model = () => {
        const closeModel = modelStore((state: any) => state.closeModel)
        const [selectedImage, setSelectedImage] = useState<File | null>(null)
        const [selectedButtonForm,setSelectedButtonForm]=useState("Stock")
        return (
                <div className="absolute w-[100vw] h-[100vh] flex justify-center items-center left-0 top-0 z-40" >
                        <div className='w-[90vw] md:w-[50vw] lg:w-[45vw] border-gradient p-[2vw] rounded-[2vw] text-center '>
                                <div className="flex flex-row justify-between">
                                        <div></div>
                                        <p className='text-[#391800] font-semibold text-[3vw] md:text-[1.6vw] my-[2vh]'>Get feedback on your trade</p>
                                        <button onClick={closeModel}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-[2.5vw]'>
                                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                        </button>
                                </div>
                                <div className='text-left my-[1vh]'>
                                        <p className='text-[2.1vw] md:text-[0.8vw] text-[#676767]'>Asset</p>
                                        <div className="flex flex-row gap-2">
                                                <button className={selectedButtonForm === "Stock" ? 'bg-[#FF6B00] text-white px-2 py-1 rounded-md' : 'bg-[rgba(255,107,0,0.06)] text-[#FF6B00] px-2 py-1 rounded-md'} onClick={() => setSelectedButtonForm("Stock")}>Stock</button>
                                                <button className={selectedButtonForm === "Forex" ? 'bg-[#FF6B00] text-white px-2 py-1 rounded-md' : 'bg-[rgba(255,107,0,0.06)] text-[#FF6B00] px-2 py-1 rounded-md'} onClick={() => setSelectedButtonForm("Forex")}>Forex</button>
                                                <button className={selectedButtonForm === "Crypto" ? 'bg-[#FF6B00] text-white px-2 py-1 rounded-md' : 'bg-[rgba(255,107,0,0.06)] text-[#FF6B00] px-2 py-1 rounded-md'} onClick={() => setSelectedButtonForm("Crypto")}>Crypto</button>
                                        </div>
                                        <input type="text" placeholder='USD' className='outline-none bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                        <div className="flex flex-row gap-2 my-[1vh]">
                                                <button className='bg-[#47BB00] px-2 py-1 rounded-md text-white'>Buy</button>
                                                <button className='bg-[#E10000] px-2 py-1 rounded-md text-white'>Sell</button>
                                        </div>
                                        <div className="flex flex-row gap-2 justify-between">
                                                <div className="w-[30%]">
                                                        <p className='text-[2.1vw] md:text-[0.8vw] text-[#676767] font-medium'>Asset</p>
                                                        <select name="" id="" className='outline-none bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                        </select>
                                                </div>
                                                <div className="w-[30%]">
                                                        <p className='text-[2.1vw] md:text-[0.8vw] text-[#676767] font-medium'> Target</p>
                                                        <select name="" id="" className='outline-none bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                        </select>
                                                </div>
                                                <div className="w-[30%]">
                                                        <p className='text-[2.1vw] md:text-[0.8vw] text-[#676767] font-medium'>Short</p>
                                                        <select name="" id="" className='outline-none bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                        </select>
                                                </div>
                                        </div>
                                        <div>
                                                <p className='text-[2.1vw] md:text-[0.8vw] text-[#676767]'>Plan Image</p>
                                                <FileInput selectedFile={selectedImage} setSelectedFile={setSelectedImage} />
                                        </div>
                                        <input type="submit" value="Submit" className='bg-[#0094FF] px-[2vw] py-[1vh] rounded-full w-full  h-fit text-white my-[1vh]' />
                                </div>
                        </div>
                </div>
        )
}

export default Model