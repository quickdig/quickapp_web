"use client"

import { ovalUser } from '@/untils/imgimport'
import Image from 'next/image'
import React from 'react'

export const ExperienceCard = () => {
    return (
        <section className='relative container w-full mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen px-4'>
            <div className="left_side_text flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
                <div className="left_side w-full flex flex-col justify-center items-center lg:items-start">
                    <div className="inner__text flex items-center justify-center gap-2 m-0 p-0">
                        <span className='text-[#001F4F] text-[120px] md:text-[180px] lg:text-[220px] font-sans'>10</span>
                        <span className='text-[#001F4F] [writing-mode:sideways-lr] rounded-full border-2 uppercase px-2 py-4 border-solid border-[#001F4F] text-sm md:text-base'>work experience</span>
                    </div>
                    <div className="lower__text flex items-center justify-center m-0 p-0">
                        <span className='text-[#001F4F] text-[20px] md:text-[26px] lg:text-[30.42px] uppercase w-full md:w-[450px]'>Where Vision Meets Innovation for Your Brand.</span>
                    </div>
                    <div className="lower_img_text_box flex flex-row justify-center gap-2 items-center mt-4">
                        <div className="img_set">
                            <Image src={ovalUser} alt='users' className='w-12 md:w-16 lg:w-20 h-full' />
                        </div>
                        <div className="right_text_area">
                            <span className='text-[#001F4F] text-left text-[16px] md:text-[18px] lg:text-[20px] capitalize'>Sustainable creativity, timeless appeal.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right_side block items-center text-center lg:text-left mt-6 lg:mt-0 max-w-xl lg:max-w-none">
                <h5 className='text-[#001F4F] text-[40px] md:text-[55px] lg:text-[70px] leading-[1.2] capitalize'>Unlocking growth for your startup—shaping your brand with precision.</h5>
                <p className='text-[#001F4F] text-[16px] md:text-[18px] lg:text-[20px] my-5 w-full md:w-[600px] lg:w-[840px]'>We blend innovative ideas with strategic insights to elevate startups. Our creative solutions and sharp branding drive growth and ensure your vision stands out. Partner with us to transform your ideas into impactful success.</p>
            </div>
        </section>
    )
}
