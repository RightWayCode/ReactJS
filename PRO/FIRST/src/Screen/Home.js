import React from 'react'
import imgBanner from '../assest/images/banner.webp'
import Banner from '../Component/Banner'
function Home() {
    return (
        <div className='p-4 mx-auto mt-24 md:px-12 max-w-screen-2xl' id='home'>
            <Banner banner={imgBanner} heading='Hey There! Welcome To  Developing World ' subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione natus veritatis eos sint. Lorem ipsum dolor sit amet consectetur." btn1="Get Started" btn2="Discount"/>
        </div>
    )
}

export default Home
