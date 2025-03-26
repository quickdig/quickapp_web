"use client"

import { bannerTop } from '@/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='relative w-full flex h-[700px]'>
            <div className="top_background w-full absolute flex h-full">
                <Image src={bannerTop} alt='top_banner' className='w-full h-[700px] object-cover' />
            </div>
        </section>
    )
}

export default Banner