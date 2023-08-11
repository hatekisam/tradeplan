import React from 'react'

const HomeJoined = () => {
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
                }
        ]
        return (
                <div className='px-[7.5vw] py-[5vh]'>
                        <p className='font-bold text-[#00192C] text-[2.1vw] my-[3vh] text-center'>More than <span>23,000</span> traders joined</p>
                        <div className='flex flex-row text-[1.05vw]'>
                                {joinedUser.map((user, index) => {
                                        return (
                                                <div key={index} className='p-[3vw] '>
                                                        <div className='relative'>
                                                                {index % 2 === 0 ? 
                                                                <img src="/image/joined1.png" alt="" className='absolute left-0 top-0 w-[10vw] ' /> : 
                                                                <img src="/image/joined2.png" alt="" className='absolute left-0 top-0 w-[10vw]' />}
                                                                <div className="flex flex-row gap-2 w-[50%] my-[2vh] z-20">
                                                                        <img src={user.image} alt={user.name} />
                                                                        <div>
                                                                                <p>{user.name}</p>
                                                                                <p className='text-[#636363]'>from {user.country}</p>
                                                                        </div>
                                                                </div>
                                                                <p className='text-[1.2vw] pl-[3vw]'>{user.body}</p>
                                                        </div>
                                                </div>
                                        )
                                })}
                        </div>
                </div>
        )
}

export default HomeJoined