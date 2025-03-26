import { handImage } from '@/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const LowerCard = () => {
    return (
        <section className="relative w-full h-screen flex justify-center items-center my-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-8 md:px-16">
                <div className="w-full text-center md:text-left md:w-1/2">
                    <h4 className='text-[#001F4F] text-2xl sm:text-3xl capitalize md:text-4xl lg:text-5xl leading-tight'>
                        Unlocking growth for your startup—shaping your brand with precision.
                    </h4>
                    <p className='text-[#001F4F] text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed mt-4'>
                        We blend innovative ideas with strategic insights to elevate startups. Our creative solutions and sharp branding drive growth and ensure your vision stands out. Partner with us to transform your ideas into impactful success.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <Image src={handImage} alt='hand_image_right' className="w-full" />
                </div>
            </div>
        </section>


    )
}

export default LowerCard