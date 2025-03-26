"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vector } from '@/untils/imgimport';
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

const Dublicate = () => {
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
                .to(azharRef.current, { y: -300, opacity: 1, duration: 1.2, ease: "power5.inOut" })
                .fromTo(
                    samiRef.current,
                    { y: 1000, opacity: 1 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power5.out" }
                )
                .to(samiRef.current, { y: -250, opacity: 1, duration: 1.2, ease: "power5.inOut" })
                .fromTo(
                    affanRef.current,
                    { y: 1000, opacity: 1 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power5.out" }
                )
                .to(affanRef.current, { y: -200, opacity: 1, duration: 1.2, ease: "power5.inOut" });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
        <div className="overflow-hidden py-[15rem] relative min-[750px]:hidden " >
                <div className='absolute top-0 w-fit left-0 right-0 mx-auto text-[2.5rem] text-[#003274] max-[1024px]:leading-[1] max-[1024px]:text-center'>AI- Powered development at the Edge</div>
                <div ref={sectionRef}>
                    <div className="relative mx-auto h-[70vh] flex w-full ">
                        <div ref={azharRef} className=' absolute left-0 right-0 w-fit mx-auto  '>
                            <div className="ccc bg-[#C8E4FF] w-[20rem] h-[25rem] rounded-[30px] border-b-2 border-white relative" >
                                <div className="relative flex flex-col w-[20rem] h-[25rem] p-6 justify-between">
                                    <h3 className="font-normal leading-[1] text-[#001F4F] text-[1.9rem]  ">Mobile Apps For Enterprice And Startups</h3>
                                    <p className="text-[#001F4F] pb-4 leading-[1]">Our clients rised more than $30 mil with MVPs developed with us</p>
                                </div>
                            </div>
                        </div>
                        <div ref={samiRef} className=" absolute left-0 right-0 w-fit mx-auto ">
                            <div className="cccc bg-[#001F4F] w-[20rem] h-[25rem] rounded-[30px] border-b-2 border-white relative" >
                                <div className="relative flex flex-col w-[20rem] h-[25rem] p-6 justify-between">
                                    <h3 className="font-normal leading-[1] text-white text-[1.9rem]  ">Mobile Apps For Enterprice And Startups</h3>
                                    <p className="text-white pb-4 leading-[1]">Our clients rised more than $30 mil with MVPs developed with us</p>
                                </div>
                            </div>
                        </div>
                        <div ref={affanRef} className=' absolute left-0 right-0 w-fit mx-auto'>
                            <div className="ccc bg-[#C8E4FF] w-[20rem] h-[25rem] rounded-[30px] border-b-2 border-white relative" >
                                <div className="relative flex flex-col w-[20rem] h-[25rem] p-6 justify-between">
                                    <h3 className="font-normal leading-[1] text-[#001F4F] text-[1.9rem]  ">Mobile Apps For Enterprice And Startups</h3>
                                    <p className="text-[#001F4F] pb-4 leading-[1]">Our clients rised more than $30 mil with MVPs developed with us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mt-[-15rem] bbb relative'>
                    <div className='container mx-auto'>
                        <div className='grid grid-cols-2 max-[1000px]:grid-cols-1 justify-between items-center '>
                            <div className='text-[3rem] text-[#003274] leading-[1] max-[450px]:text-[1.8rem] max-[450px]:text-center'>Unlocking growth for your startup—shaping your brand with precision.</div>
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

export default Dublicate;
