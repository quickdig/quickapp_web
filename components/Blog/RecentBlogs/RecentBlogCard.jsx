import { blogImageOne } from '@/untils/imgimport'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentBlogCard = ({ title, slug, image, date }) => {
    return (
        <div className="flex flex-col items-center w-full border-l-2 border-r-2 border-b-[10px] border-[#001F4F] gap-4 pb-5 rounded-3xl">
            {/* Image Box */}
            <div className="w-full h-[55vh] flex justify-center overflow-hidden rounded-3xl">
                <Image
                    src={blogImageOne}
                    alt="recent_blog_image"
                    layout="center"
                    objectFit="center"
                    className="object-cover rounded-3xl w-full h-auto"
                />
            </div>

            {/* Date Box */}
            <div className="w-full text-left px-5">
                <span className="text-[18px] md:text-[20px] font-light text-[#001F4F] border-b-2 border-solid border-[#001F4F]">
                    November 05, 2025
                </span>
            </div>

            {/* Blog Link */}
            <div className="w-full text-left px-5">
                <Link href="/blog/we-activate-businesses-and-brands-for-the-digital-change" className="text-[22px] md:text-[25px] font-normal text-[#001F4F] hover:underline capitalize">
                    We Activate Businesses & Brands for the Digital Change
                </Link>
            </div>
        </div>

    )
}

export default RecentBlogCard