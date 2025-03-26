import { copy, hand } from '@/untils/imgimport'
import Image from 'next/image'
import React, { useRef } from 'react'

const Contact = () => {
    const textRef = useRef(null);

    const copyText = () => {
        if (textRef.current) {
            textRef.current.select();
            textRef.current.setSelectionRange(0, 99999); // For mobile devices
            navigator.clipboard.writeText(textRef.current.value)
                .then(() => console.log("Copied: " + textRef.current.value))
                .catch(err => console.error("Failed to copy: ", err));
        }
    }

    return (
        <>
            <section className='relative my-12'>
                <Image className='absolute top-0 max-[1024px]:top-[4.5rem] w-[30rem] max-[1024px]:w-[17rem] left-0 scale-x-[-1]' src={hand} alt='' />
                <div className='container mx-auto'>
                    <div className="grid grid-cols-2 max-[1000px]:grid-cols-1 ">
                        <div className='mt-auto'>
                            <div className='text-[4rem] text-[#003274] leading-[1] max-[1000px]:text-[2.8rem] pb-[5rem]'>Get your project estimate for free</div>
                        </div>
                        <div>
                            {/* Hidden Input Field */}
                            <input
                                ref={textRef}
                                type="text"
                                value="info@quickdigitals.ae"
                                readOnly
                                className="absolute opacity-0 pointer-events-none"
                            />

                            <div className='flex justify-end relative max-[1024px]:hidden'>
                                <button onClick={copyText} className="mt-2 max-[1024px]:absolute max-[1024px]:top-[-5rem] flex items-center gap-2 text-[#666666] px-4 py-2 rounded">
                                    <Image src={copy} alt='' /> Copy Email
                                </button>
                            </div>

                            <div className='text-[4rem] max-[1000px]:text-[1.8rem] text-[#003274] max-[1024px]:mt-[5rem]'>info@quickdigitals.ae</div>

                            <form action="" className='mt-8'>
                                <div className='grid grid-cols-2 max-[1000px]:grid-cols-1 gap-4'>
                                    <input className='p-4 bg-transparent focus:outline-none border-b-2 border-[#666666]' type="text" placeholder='Your Name' />
                                    <input className='p-4 bg-transparent focus:outline-none border-b-2 border-[#666666]' type="email" placeholder='Email Address' />
                                </div>
                                <div className='w-full mt-8'>
                                    <textarea className='p-4 bg-transparent focus:outline-none border-b-2 border-[#666666] w-full' name="message" placeholder='Message' id=""></textarea>
                                </div>
                                <button className='border-2 border-b-4 border-[#1B45CE] rounded-full px-8 py-2 text-[#1B45CE] mt-8'>HIT US UP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
