import React from 'react'
import BlogLongCard from './BlogLongCard'
import { blogImageOne } from '@/untils/imgimport'
import { blogImageTwo } from '@/untils/imgimport'
import { blogImageThree } from '@/untils/imgimport'
import { blogImageFour } from '@/untils/imgimport'
import { blogImageFive } from '@/untils/imgimport'

const ContentSection = () => {
    return (
        <section className='relative w-full container mx-auto flex flex-col items-center justify-center min-h-screen px-4'>
            <div className="w-[50%] flex flex-col jusitfy-center items-center mt-10">
                <h3 className="text-center text-[50px] text-[#001F4F] font-normal capitalize">Latest Blog Posts</h3>
                <p className='text-sm text-[#001F4F] text-center line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit, curae posuere donec tellus eu egestas aliquet, lacinia parturient facilisi quam dictum suspendisse. </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full mx-auto my-10">
                <BlogLongCard image={blogImageOne} />
                <BlogLongCard image={blogImageTwo} />
                <BlogLongCard image={blogImageThree} />
                <BlogLongCard image={blogImageFour} />
                <BlogLongCard image={blogImageFive} />
            </div>
        </section>
    )
}

export default ContentSection