import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
const HomeJoined = () => {
        const responsive = {
                superLargeDesktop: {
                        // the naming can be any, depends on you.
                        breakpoint: { max: 4000, min: 3000 },
                        items: 5
                },
                desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3
                },
                tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2
                },
                mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1
                }
        };
        const joinedUser = [
                {
                        image: "/image/steven.png",
                        name: "Wade Palmer",
                        country: "Germany",
                        body: "Very convenience for trader, spread for gold is relatively low compare to other broker"
                }, {
                        image: "/image/steven.png",
                        name: "Will Smity",
                        country: "USA",
                        body: "One of the best FX brokers, I have been using! their trading conditions are excellent"
                }, {
                        image: "/image/steven.png",
                        name: "Wade Palmer",
                        country: "Germany",
                        body: "Very convenience for trader, spread for gold is relatively low compare to other broker"
                }, {
                        image: "/image/steven.png",
                        name: "Will Smity",
                        country: "USA",
                        body: "One of the best FX brokers, I have been using! their trading conditions are excellent"
                }, {
                        image: "/image/steven.png",
                        name: "Wade Palmer",
                        country: "Germany",
                        body: "Very convenience for trader, spread for gold is relatively low compare to other broker"
                }, {
                        image: "/image/steven.png",
                        name: "Will Smity",
                        country: "USA",
                        body: "One of the best FX brokers, I have been using! their trading conditions are excellent"
                }
        ]
        return (
                <div className='px-[4vw] py-[3vh] md:px-[7.5vw] md:py-[5vh] '>
                        <p className='font-bold text-[#00192C] text-[3vw] md:text-[2.1vw] my-[1vh] md:my-[3vh] text-center'>More than <span>23,000</span> traders joined</p>
                        <Carousel responsive={responsive} draggable renderDotsOutside={false} showDots infinite className="owl-carousel owl-theme skill-slider  pb-[2vh]">
                                {joinedUser.map((user, index) => {
                                        return (
                                                <div key={index} className='p-[3vw] '>
                                                        <div className='relative'>
                                                                {index % 2 === 0 ?
                                                                        <img src="/image/joined1.png" alt="" className='absolute left-0 top-0 w-[10vw] ' /> :
                                                                        <img src="/image/joined2.png" alt="" className='absolute left-0 top-0 w-[10vw]' />}
                                                                <div className="flex flex-row gap-2  my-[2vh] z-20 text-[1.8vw]  md:text-[1.05vw]">
                                                                        <img src={user.image} alt={user.name}  className='w-[4vw] h-fit'/>
                                                                        <div>
                                                                                <p>{user.name}</p>
                                                                                <p className='text-[#636363]'>from {user.country}</p>
                                                                        </div>
                                                                </div>
                                                                <p className='text-[1.9vw] md:text-[1.2vw] pl-[3vw]'>{user.body}</p>
                                                        </div>
                                                </div>
                                        )
                                })}
                        </Carousel>
                </div >
        )
}

export default HomeJoined