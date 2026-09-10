import { Globe } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Content Container */}
            <div className="relative px-4 sm:px-20 pt-20 pb-10 sm:pb-0 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-start">
                {/* Top Left - Logo and EST */}
                <div className='flex items-center gap-2 w-full lg:w-1/2'>
                    <Globe className="w-8 sm:w-10 h-8 sm:h-10 text-white" strokeWidth={1} />
                    <span className='font-bold tracking-wider text-white text-2xl sm:text-3xl'>NRT</span>
                    <div className='flex flex-col pl-6'>
                        <p className='uppercase text-white text-[9px] tracking-tight font-semibold'>Nationale Regionale du Transport</p>
                        <p className='text-white/70 text-[9px] tracking-tight'>EST. 2002</p>
                    </div>
                </div>

                {/* Content Grid - 2 rows, 2 columns */}
                <div className='grid grid-cols-2 gap-10 w-full lg:w-2/3 text-white pr-0 lg:pr-20'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-base sm:text-xl tracking-tight'>Direct Access to Private Travel</h1>
                        <span>——</span>
                        <p className='text-[10px]'>Fly beyond boundaries with NRT. Our regional and international flight operations ensure seamless, personalized travel experiences — from departure to touchdown. Every journey is tailored to your comfort, privacy, and schedule.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-base sm:text-xl tracking-tight'>Your Freedom to Enjoy your Life</h1>
                        <span>——</span>
                        <p className='text-[10px]'>We value your time above all. NRT gives you the freedom to live, work, and connect wherever business and life take you — without compromise. Every mission is thoughtfully crafted to match your pace and priorities.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-base sm:text-xl tracking-tight'>Precision and Excellence with us</h1>
                        <span>——</span>
                        <p className='text-[10px]'>Each detail of your flight — from route coordination to in-flight service — reflects our dedication to aviation excellence. Our crew and fleet meet the highest global safety standards, ensuring reliability in every mission.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-base sm:text-xl tracking-tight'>Global Reach, Regional Mastery</h1>
                        <span>——</span>
                        <p className='text-[10px]'>With access to key hubs and regional destinations across over 150 countries, NRT connects you effortlessly. Our flight dispatchers and aviation specialists manage every aspect of your journey.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About