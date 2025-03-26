import React from 'react'
import RecentBlogCard from './RecentBlogCard'

const RecentBlogPage = () => {
    return (
        <div className='w-full flex flex-col items-center justify-between'>
            <div className="w-full flex flex-row items-center justify-center">
                <h4 className="text-[45px] text-[#003274] text-center font-normal">Our Recent Blogs</h4>
            </div>

            <div className="w-full mx-auto grid grid-cols-3 item-center justify-center gap-5">
                <RecentBlogCard />
                <RecentBlogCard />
                <RecentBlogCard />
            </div>
        </div>
    )
}

export default RecentBlogPage