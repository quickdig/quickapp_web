import { hand } from '@/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const ContentBox = () => {
    return (
        <section className="relative container mx-auto w-full px-6 md:px-12 lg:px-20 contactus_section flex flex-col items-center justify-center my-12">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <h4 className="text-3xl md:text-4xl lg:text-[45px] text-[#003274] font-normal">Need Help?</h4>
                <p className="text-base md:text-lg lg:text-[20px] text-[#003274] font-light max-w-2xl">Lorem ipsum dolor sit amet consectetur adipiscing elit, curae posuere donec tellus eu egestas aliquet, lacinia parturient facilisi quam dictum suspendisse. Tincidunt gravida vivamus</p>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-start mt-8 gap-6 md:gap-12">
                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <p className="text-left text-[55px] text-[#003274] font-normal">Say Hello!</p>
                    <p className="text-left text-[55px] text-[#003274]">info@quickdigitals.ae</p>
                    <p className="text-left text-[55px] text-[#003274]">888-123-4567</p>
                </div>
                <div className="w-full md:w-1/2 relative flex justify-end">
                    <div className="absolute -right-40 top-0 w-full">
                        <Image src={hand} alt='hand_image' className='w-full' /> {/* .....first commit comment */}
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-start items-start md:items-center gap-6 md:gap-12 mt-8 mb-20">
                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <span className="text-[#003274] text-[20px] font-semibold underline">Opening Hours</span>
                    <span className="text-sm md:text-base text-[#003274]">Monday to Saturday 8:30 am to 8:30 pm<br />Sunday 10:00 am to 8:30 pm</span>
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <span className="text-[#003274] text-[20px] font-semibold underline">Office Address</span>
                    <span className="text-sm md:text-base text-[#003274]">Office 2806 Fortune Tower Cluster C<br />Jumeirah Lakes Tower, Dubai UAE</span>
                </div>
            </div>
        </section>
    )
}

export default ContentBox