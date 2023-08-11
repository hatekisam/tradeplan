import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
        return (
                <div className='flex flex-row w-full px-[8vw] py-[5vh] justify-between text-[1.05vw] items-center'>
                        <div className='w-[30%]'>
                                <div className="flex flex-row gap-2 items-center">
                                        <img src="/svg/logo.svg" alt="" className='w-[2.6vw]' />
                                        <p className='text-[#FF6B00] '>TradePlans<span className='text-[#0094FF]'>.AI</span></p>
                                </div>
                                <p className='text-[#6C6C6C] my-[1vw]'>Say goodbye to uncertainty and hello to confidence! Our state-of-the-art A.I. technology analyzes your trade plan in real-time, providing you with personalized feedback that's exclusively sent to you via private email. .</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center text-[#1C1C1C] font-medium w-[30%]">
                                <Link to={"/feedback"}>Feedback</Link>
                                <Link to={"/about"}>About Us</Link>
                                <Link to={"/contact"}>Contact Us</Link>
                        </div>
                        <div className='w-[30%]'>
                                <p className='font-bold text-[#00192C]'>&copy; {new Date().getFullYear()} Created by TradePlans.ai</p>
                                <p className='text-[#474747] font-medium text-[0.8vw]'>Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.</p>
                        </div>
                </div>
        )
}

export default Footer