import React from 'react'
import HomeIntro from '../components/HomeIntro'
import HomeAbout from '../components/HomeAbout'
import HomeJoined from '../components/HomeJoined'
import {Helmet} from "react-helmet"

const Home = () => {
        return (
                <div className='w-full '>
                        <Helmet>
                                <title>Trade Plan </title>
                        </Helmet>
                        <HomeIntro />
                        <HomeAbout />
                        <HomeJoined />
                </div>
        )
}

export default Home