import React from 'react'
import TestimonialCard from './TestimonialCard'

const ContentSection = () => {
    return (
        <section className="relative container mx-auto w-full testimonial_section flex flex-col items-center justify-center my-16">
            <div className="w-full flex flex-row items-center justify-center">
                <h4 className="text-[45px] text-[#003274] text-center font-normal">Our Clients Speak for Us</h4>
            </div>

            <div className="w-full grid grid-cols-3 mt-10 gap-y-16 items-center gap-5 justify-center">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />

                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </section>
    )
}

export default ContentSection