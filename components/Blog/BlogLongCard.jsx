import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogLongCard = ({ date, image, title, description, slug }) => {
    return (
        <div className="w-full flex flex-row justify-between items-center gap-6 p-4">
            {/* Date Box */}
            <div className="date_box flex items-center justify-center w-full md:w-1/3 text-center">
                <span className="date_text text-[25px] font-medium text-[#001F4F] border-b-4 border-solid border-[#001F4F]">November 05, 2025</span>
            </div>

            {/* Image Box */}
            <div className="image_box w-full md:w-1/3 aspect-square relative overflow-hidden">
                <Image
                    src={image}
                    alt="blog_image"
                    layout="fill"
                    objectFit="cover"
                    className='rounded-3xl'
                />
            </div>

            {/* Content Box */}
            <div className="text_content flex flex-col items-start text-left w-full md:w-1/3 space-y-3">
                <Link href="#" className="blog_header text-[25px] font-semibold text-[#001F4F] hover:underline capitalize">
                    We Activate Businesses & Brands for the Digital Change
                </Link>
                <p className="text-sm text-[#001F4F] line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, curae posuere donec tellus eu egestas aliquet.
                </p>
                <Link
                    href="#"
                    className="w-auto bg-transparent uppercase text-[#001F4F] rounded-full border-2 px-6 py-2 border-solid border-[#001F4F] hover:bg-[#001F4F] hover:text-white transition"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogLongCard