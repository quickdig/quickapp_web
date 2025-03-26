"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vector } from '@/untils/imgimport';
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const sectionRef = useRef(null);
    const azharRef = useRef(null);
    const samiRef = useRef(null);
    const affanRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    pin: true,
                },
            });

            tl.fromTo(
                azharRef.current,
                { y: 1000, opacity: 1 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power5.out" }
            )
                .to(azharRef.current, { y: -295, opacity: 1, duration: 1.2, ease: "power5.inOut" })
                .fromTo(
                    samiRef.current,
                    { y: 1000, opacity: 1 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power5.out" }
                )
                .to(samiRef.current, { y: -325, opacity: 1, duration: 1.2, ease: "power5.inOut" })
                .fromTo(
                    affanRef.current,
                    { y: 1000, opacity: 1 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power5.out" }
                )
                .to(affanRef.current, { y: -295, opacity: 1, duration: 1.2, ease: "power5.inOut" });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="overflow-hidden py-[15rem] relative max-[750px]:hidden " >
                <div className='absolute top-0 w-fit left-0 right-0 mx-auto text-[2.5rem] text-[#003274] '>AI- Powered development at the Edge</div>
                <div ref={sectionRef}>
                    <div className="relative mx-auto justify-center flex w-[80%]">
                        <div ref={azharRef} className='azhar  left-[21rem] '>
                            <div className="ccc bg-[#1B45CE] w-[20rem] h-[25rem] rounded-[30px] border-b-2 border-white relative" >
                                <div className="relative flex flex-col w-[20rem] h-[25rem] p-6 justify-between">
                                    <h3 className="font-normal leading-[1] text-white text-[1.9rem]  ">Mobile Apps For Enterprice And Startups</h3>
                                    <p className="text-white pb-4 leading-[1]">Our clients rised more than $30 mil with MVPs developed with us</p>
                                </div>
                            </div>
                        </div>
                        <div ref={samiRef} className="sami  z-20">
                            <div className="cccc bg-[#D5FC6B] w-[20rem] mt-[13rem] h-[25rem] rounded-[30px] border-b-2 border-white relative" >
                                <div className="relative flex flex-col w-[20rem] h-[25rem] p-6 justify-between">
                                    <h3 className="font-normal leading-[1] text-[#003274] text-[1.9rem]  ">Mobile Apps For Enterprice And Startups</h3>
                                    <p className="text-[#003274] pb-4 leading-[1]">Our clients rised more than $30 mil with MVPs developed with us</p>
                                </div>
                            </div>
                        </div>
                        <div ref={affanRef} className='affan  right-[21rem]'>
                            <div className="ccc bg-[#1B45CE] w-[20rem] h-[25rem] rounded-[30px] border-b-2 border-white relative" >
                                <div className="relative flex flex-col w-[20rem] h-[25rem] p-6 justify-between">
                                    <h3 className="font-normal leading-[1] text-white text-[1.9rem]  ">Mobile Apps For Enterprice And Startups</h3>
                                    <p className="text-white pb-4 leading-[1]">Our clients rised more than $30 mil with MVPs developed with us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mt-[-15rem] bbb relative'>
                    <div className='container mx-auto'>
                        <div className='grid grid-cols-2 max-[1000px]:grid-cols-1 justify-between items-center '>
                            <div className='text-[3rem] text-[#003274] leading-[1]'>Unlocking growth for your startup—shaping your brand with precision.</div>
                            <div>
                                <Image src={vector} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default Section3;
