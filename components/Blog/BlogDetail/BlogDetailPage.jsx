"use client"
import CommonHeader from '@/components/CommonHeader'
import React from 'react'
import Banner from '../Banner'
import Contact from '@/components/Home/Contact'
import BlogContent from './BlogContent'

function BlogDetailPage({ data }) {
    return (
        <>
            <CommonHeader />
            <Banner />
            <BlogContent />
            <Contact />
        </>
    )
}

export default BlogDetailPage