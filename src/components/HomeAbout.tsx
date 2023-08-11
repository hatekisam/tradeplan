import React from 'react'

const HomeAbout = () => {
        return (
                <div className='flex flex-row justify-between px-[7.5vw] py-[5vh] relative'>
                        <img src="/image/homeabout.png" alt="" className='absolute left-0 bottom-[5vh] w-[10vw]' />
                        <div className='text-[1.05vw] font-medium text-[#383838] w-[40%]'>
                                <p className='my-[6vh] text-[1.9vw] font-bold text-[#0094FF]'>About <span className='text-[#FF6B00]'>TradePlans. AI</span></p>
                                <p className='my-[3vh] '>Our platform leverages cutting-edge Artificial Intelligence technology to provide personalized feedback and insights for traders. Through real-time analysis, we send A.I.-driven feedback straight to your inbox, ensuring confidentiality.</p>
                                <p className='my-[3vh] '>Additionally, our global community of traders offers social feedback, allowing for a wider perspective and valuable insights. By combining the wisdom of experienced traders with A.I., we empower traders to excel and maximize their success. Join the trading revolution today and unlock the transformative power of A.I.-driven second opinions. Invest in your success now!</p>
                                <button className='bg-[#FF6B00] px-[2vw] py-[1vh] rounded-full text-white my-[1vh]'>Donate to TradePlansAi</button>
                        </div>
                        <div className="w-[50%] ">
                                <div className='relative flex justify-end'>
                                        <img src="/image/homeabout1.png" alt="" className='absolute left-[5vw] top-[3.2vh] w-[25vw]' />
                                        <img src="/image/homeabout2.png" alt=""  className='w-[70%]'/>
                                </div>
                        </div>
                </div>
        )
}

export default HomeAbout