import React from 'react'
import HomeIntro from '../components/HomeIntro'
import HomeAbout from '../components/HomeAbout'
import HomeJoined from '../components/HomeJoined'

const Home = () => {
        return (
                <div className='w-full '>
                        <HomeIntro />
                        <HomeAbout />
                        <HomeJoined />
                </div>
        )
}

export default Home