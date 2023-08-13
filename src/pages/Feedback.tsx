import { Pagination } from '@mui/material'
import Rating from '@mui/material/Rating'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const Feedback = () => {
        const feedback = [
                {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will John Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will John Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will John Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will John Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will John Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will John Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Janet Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                },
        ]
        const [newRating, setNewRating] = useState(0)
        const [page, setPage] = useState(1)
        const numOfPages = Math.ceil(feedback.length / 5);
        const [shownFeeds,setShownFeeds]= useState(feedback.slice(0,4))
        useEffect(()=>{
                setShownFeeds(feedback.slice(page*5-1-4,page*5-1))
        },[page])
        return (
                <div>
                        <Helmet>
                                <title>Trade Plan | Feedback</title>
                        </Helmet>
                        <div className='gap-[5vw] text-[2.2vw] md:text-[1.05vw]  px-[4vw] py-[4vh] md:px-[7.5vw] md:py-[8vh]'>
                                <p className='font-bold text-[#00192C] text-[3.8vw] md:text-[2.1vw] my-[1vh] text-center'>We are interested in your opinions</p>
                                <p className='my-[.5vh] md:my-[2vh] text-[#191919]  text-center'>Unlock the potential of your trades – Act now and experience the <br /> transformative power of A.I.-driven second opinions!</p>
                                <div className='flex flex-col md:flex-row gap-[5vw]  my-[7vh]'>
                                        <img src="/image/blur1.png" alt="" className='absolute top-0 right-0 w-[20vw]' />
                                        <img src="/image/blur2.png" alt="" className='absolute top-[20vh]  left-0 w-[20vw]' />
                                        <div className="w-full md:w-[50%] flex items-center justify-center">
                                                <img src="/image/feedback.png" className="w-[80%]" />
                                        </div>
                                        <div className="w-full md:w-[45%] flex items-center justify-center">
                                                <div className=' border-gradient p-[2vw] rounded-[2vw] text-center w-full'>
                                                        <p className='text-[#391800] font-semibold text-[3.5vw] md:text-[1.6vw] my-[2vh]'>Tell us what you think about us</p>
                                                        <div className='text-left my-[1vh]'>
                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Rate Us</p>
                                                                <Rating
                                                                        name="simple-controlled"
                                                                        value={newRating}
                                                                        onChange={(event, newValue) => {
                                                                                setNewRating((prev) => newValue ? newValue : prev);
                                                                        }}
                                                                />
                                                                <div>
                                                                        <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Name</p>
                                                                        <input type="text" placeholder='Your Name' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                                </div>
                                                                <div>
                                                                        <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Email</p>
                                                                        <input type="text" placeholder='Your Email' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                                </div>
                                                                <div>
                                                                        <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Message</p>
                                                                        <textarea placeholder='Your Message' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                                </div>
                                                                <input type="submit" value="Submit" className='bg-[#FF6B00] px-[2vw] py-[1vh] rounded-full w-full  h-fit text-white my-[1vh]' />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <p className='my-[2vh] md:my-[5vh] text-[2.5vw] md:text-[1.6vw] font-semibold'>Other Feedbacks</p>
                                <div>
                                        {shownFeeds.map((feedback, index) => {
                                                return (
                                                        <div key={index} className='border-gradient rounded-[2vw] my-[2vh] md:my-[5vh] p-[1.5vw]'>
                                                                <div className="flex flex-row gap-2 w-[50%] my-[2vh] z-20">
                                                                        <img src={feedback.image} alt={feedback.name} />
                                                                        <div>
                                                                                <p>{feedback.name}</p>
                                                                                <div className="flex flex-row gap-[.3vw]">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <p className='text-[2.4vw] md:text-[1.2vw] pl-[3vw]'>{feedback.body}</p>
                                                        </div>
                                                )
                                        })}
                                </div>
                                <div className="flex items-center justify-center">
                                        <Pagination count={numOfPages}  page={page} onChange={(e,value)=>setPage(value)}/>
                                </div>
                        </div>
                </div>
        )
}

export default Feedback