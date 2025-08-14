import React from 'react'
import HeroCard from './HeroCard'

const HeroSection = () => {
    return (
        <div>

            <div className='hero-section h-[90vh] flex flex-col  justify-center  bg-indigo-600 '>

                <div className="hero-title mx-56  text-white mt-10 ">
                    <h3 className='text-[42px] font-bold'>Welcome to </h3>
                    <h3 className='text-[42px] font-bold '>Crescent Exchange</h3>
                </div>

                <div className='hero-para text-left mx-56'>
                    <p className='text-[14px] text-gray-400 font-medium'>Your gateway to secure, efficient, and cost-effective <br /> solutions for individuals and businesses alike. With our user-  <br /> friendly platform, customers can easily exchange <br /> currencies, transfer funds internationally, and stay updated <br /> with the latest exchange rates.</p>

                </div>

                <div className='mx-56 mt-5'>
                    <button className='bg-green-400 px-4 text-white text-[13px] h-[35px] rounded-[5px] font-semibold'>Explore Services</button>
                </div>

                <HeroCard />

            </div>

        </div>
    )
}

export default HeroSection
