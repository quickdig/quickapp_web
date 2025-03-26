import { ovalUser, start, user } from '@/untils/imgimport'
import Image from 'next/image'
import React from 'react'


const TestimonialCard = () => {
    return (
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl border-l-2 border-r-2 border-t-2 border-b-[10px] border-[#001F4F] rounded-3xl p-6 bg-white shadow-lg">

            <div className="absolute -top-8 left-6 bg-[#C8E4FF] w-[60px] h-[60px] text-[20px] flex items-center justify-center rounded-full">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.9209 0.471632L25.3339 4.75653C23.8078 4.63913 22.6926 4.95218 21.9882 5.69568C21.2838 6.43918 20.8534 7.43703 20.6969 8.68923C20.5403 9.94144 20.5012 11.2915 20.5795 12.7393H25.9209V25.1244H15.8837V10.3915C15.8837 6.79136 16.7837 4.09129 18.5838 2.29125C20.4229 0.491199 22.8686 -0.115339 25.9209 0.471632ZM11.0118 0.471632L10.4249 4.75653C8.89872 4.63913 7.78348 4.95218 7.07911 5.69568C6.37475 6.43918 5.9443 7.43703 5.78778 8.68923C5.63125 9.94144 5.59212 11.2915 5.67038 12.7393H11.0118V25.1244H0.974609V10.3915C0.974609 6.79136 1.87463 4.09129 3.67468 2.29125C5.51386 0.491199 7.95957 -0.115339 11.0118 0.471632Z" fill="white" />
                </svg>
            </div>

            <div className="flex justify-start my-4">
                <Image src={start} alt='stars' className='w-[100px]' />
            </div>

            <p className="text-[#003274] text-justify text-sm md:text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
            </p>

            <div className="flex flex-row items-center justify-start mt-4 space-x-3">
                <Image src={user} alt='user' className='w-[40px] rounded-full' />
                <div className="flex flex-col items-start">
                    <span className="text-[#003274] font-semibold text-sm md:text-base">Justus Menke</span>
                    <span className="text-gray-600 text-xs md:text-sm">CEO Eronaman</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard