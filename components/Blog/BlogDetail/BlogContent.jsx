import { blogInner } from '@/untils/imgimport'
import Image from 'next/image'
import React from 'react'
import RecentBlogPage from '../RecentBlogs/RecentBlogPage'

const BlogContent = ({ data }) => {
    return (
        <section className="relative container mx-auto px-2 my-10 w-full flex flex-col items-center space-y-6">

            {/* Header Text */}
            <div className="w-full text-center">
                <h4 className="text-[60px] font-normal text-[#001F4F]">
                    We Activate Businesses & Brands for the Digital Change
                </h4>
            </div>

            {/* Quote Text */}
            <div className="text_content_quote text-center max-w-3xl">
                <p className="text-[20px] text-[#001F4F]">
                    “Explore the meticulous steps we take from initial concepts to final designs, revealing the creativity and strategy behind every project. Learn how we collaborate, innovate, and perfect our craft to deliver exceptional results for our clients.”
                </p>
            </div>

            {/* Image Box */}
            <div className="image_box w-full h-[80vh] rounded-3xl relative overflow-hidden">
                <Image
                    src={blogInner}
                    alt="blog_image_inner"
                    layout="contain"
                    objectFit="contain"
                    className="rounded-3xl object-contain"
                />
            </div>

            {/* Blog Text */}
            <div className="blog__lower_text w-full">
                <p className="text-justify text-md md:text-lg text-[#001F4F] leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            {/* Separator */}
            <hr className="w-full border-1 border-solid border-[#003274]" />

            <RecentBlogPage />

        </section>
    )
}

export default BlogContent