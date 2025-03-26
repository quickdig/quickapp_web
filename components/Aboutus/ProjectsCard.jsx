"use client"
import { imageOne, imageThree, imageTwo } from '@/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const ProjectsCard = () => {
    return (
        <section className="relative w-full flex">
            <div className="w-2/5 relative">
                <Image src={imageOne} alt="left_side_image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <div className="right_card right_background w-3/5 flex flex-col justify-between">
                <div className='top_section flex flex-row justify-center w-full'>
                    <div className='w-full'>
                        <Image src={imageTwo} alt="right_top_image" className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex flex-col items-center justify-around w-full">
                        <div className='mx-10'>
                            <span className="text-[#001F4F] font-normal text-[30px] leading-[45px] text-left">SUCCESSFULLY COMPLETED PROJECT</span>
                            <div className='flex flex-col items-start w-full text-left'>
                                <span className="text-[80px] text-[#001F4F] font-medium">365+</span>
                                <span className=" text-[#001F4F] text-[20px] -mt-8">EXCELLENCE RATE</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='top_section flex flex-row-reverse justify-center w-full'>
                    <div className='w-full'>
                        <Image src={imageThree} alt="right_top_image" className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex flex-col items-center justify-around w-full mt-8">
                        <div className='flex flex-col items-start w-full text-left'>
                            <span className="text-[#001F4F] font-normal px-10 text-[35.14px] leading-[45px] uppercase text-left">Project 👋Excellence Rate</span>
                            <span className="text-[80px] text-[#001F4F] px-10 font-medium">98%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ProjectsCard