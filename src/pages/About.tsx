import React from 'react'
import { Helmet } from 'react-helmet'

const About = () => {
        return (
                <div>
                        <Helmet>
                                <title>Trade Plan | About</title>
                        </Helmet>
                        <div className='gap-[5vw] text-[2.2vw] md:text-[1.05vw]  px-[4vw] py-[4vh]  md:px-[7.5vw] md:py-[8vh]'>
                                <p className='font-bold text-[#00192C] text-[3.5vw] md:text-[2.1vw] my-[.5vh] md:my-[1vh]'>About us</p>
                                <p className='my-[1vh] md:my-[3vh] text-[#191919]  '>Introducing the Future of Trading: A.I. Empowered Second Opinions!</p>
                                <div className='flex flex-col md:flex-row gap-[5vw]'>
                                        <img src="/image/blur1.png" alt="" className='absolute top-0 right-0  w-[20vw]'  />
                                        <img src="/image/blur2.png" alt="" className='absolute top-[20vh]  left-0 w-[20vw]' />
                                        <div className='text-[2.2vw] md:text-[1.05vw] font-medium text-[rgba(0,0,0,0.6)] w-full  md:w-[50%]'>
                                                <p className='my-[3vh] '>Step into the world of next-level trading with our cutting-edge Artificial Intelligence-driven platform. Get ready to revolutionize your trade plans and supercharge your success!</p>
                                                <p className='my-[3vh] '><span className='text-black'> Step 1: </span>A.I. Feedback Straight to Your Inbox! Say goodbye to uncertainty and hello to confidence! Our state-of-the-art A.I. technology analyzes your trade plan in real-time, providing you with personalized feedback that's exclusively sent to you via private email. Rest assured, this valuable insight remains confidential and is not shared anywhere on the website. Harness the power of A.I. to make informed decisions and maximize your trading potential.</p>
                                                <img src="/image/about1.png" alt="Robot" />
                                                <p className='my-[3vh] '>Compare, Contrast, and Excel! Combine the best of both worlds – the precision of A.I. and the wisdom of experienced traders. Compare and contrast your trading ideas, leveraging feedback from both human and machine sources. Unleash the full potential of your trading strategies, and elevate your game to new heights!</p>
                                                <p className='my-[3vh] '>Don't Miss Out on the Trading Revolution! Join the ranks of successful traders who are already reaping the rewards of A.I.-enhanced decision-making. Embrace the power of technology and social collaboration to refine your trading approach, minimize risks, and maximize gains.</p>
                                        </div>
                                        <div className='text-[2.2vw] md:text-[1.05vw] font-medium text-[rgba(0,0,0,0.6)] w-full  md:w-[50%]'>
                                                <img src="/image/about3.png" alt="Robot" />
                                                <p className='my-[3vh] '><span className='text-black'> Step 1: </span>A.I. Feedback Straight to Your Inbox! Say goodbye to uncertainty and hello to confidence! Our state-of-the-art A.I. technology analyzes your trade plan in real-time, providing you with personalized feedback that's exclusively sent to you via private email. Rest assured, this valuable insight remains confidential and is not shared anywhere on the website. Harness the power of A.I. to make informed decisions and maximize your trading potential.</p>
                                                <img src="/image/about2.png" alt="Robot" />
                                        </div>
                                </div>
                                <p className='my-[1.5vh]  text-[#191919]  text-center'>Unlock the potential of your trades – Act now and experience the <br /> transformative power of A.I.-driven second opinions!</p>
                                <p className='font-bold text-black  my-[1.5vh] text-center'>Invest in Your Success Today!</p>
                                <div className='flex items-center justify-center'>
                                        <button className='bg-[#FF6B00] px-[2vw] py-[1vh] rounded-full text-white my-[1vh]'>Get started</button>
                                </div>
                                <div className="my-[5vh]">
                                        <p className="text-center text-[#FF6B00] font-bold text-[3.6vw]  md:text-[1.9vw]"><span className='text-[#0094FF]'>Our</span> CEO</p>
                                        <div className="my-[2vh] flex flex-col md:flex-row gap-[5vw]">
                                                <div className="w-full md:w-[50%]">
                                                        <p className='font-bold text-[#00192C] text-[3.5vw] md:text-[2.1vw] my-[1vh]'>Wayne McDonell</p>
                                                        <p className='my-[1vh] md:my-[3vh] text-[#383838]'>Introducing the Future of Trading: A.I. Empowered Second Opinions!</p>
                                                        <p className='my-[1vh] md:my-[3vh] text-[#383838]'>Wayne McDonell is a dynamic and visionary leader who has made a significant impact in the fields of entrepreneurship, venture capitalism, and finance, with a particular focus on AI-driven financial trading. His exceptional expertise, unwavering passion, and dedication to empowering individuals in the realm of AI trading have positioned him as a respected figure in the world of finance.<br />
                                                                Starting his career in the vibrant Silicon Valley during the 1990s, McDonell showcased his entrepreneurial prowess by launching high-tech ventures and coaching startup CEOs. His strategic guidance and mentorship played a pivotal role in the success of emerging companies, while his ventures as a venture capitalist involved over 100 investments in patented technologies, demonstrating his keen acumen for identifying groundbreaking innovations.</p>
                                                        <p className='my-[1vh] md:my-[3vh] text-[#0094FF]'>Read more</p>
                                                        <div className="my-[1vh] md:my-[4vh]">
                                                                <p>Contact him</p>
                                                                <div className="flex flex-row gap-[1vw]">
                                                                        <img src="/svg/twitter.svg" alt=""  className='bg-[#FF6B00] rounded-full p-[.5vw]'/>
                                                                        <img src="/svg/tiktok.svg" alt=""  className='bg-[#FF6B00] rounded-full p-[.5vw]'/>
                                                                        <img src="/svg/linkedIn.svg" alt=""  className='bg-[#FF6B00] rounded-full p-[.5vw]'/>
                                                                        <img src="/svg/email.svg" alt=""  className='bg-[#FF6B00] rounded-full p-[.5vw]'/>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className='w-full md:w-[50%] flex items-center justify-center'>
                                                        <img src="/image/boss.png" alt="" className='w-[80%]'/>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div >
        )
}

export default About