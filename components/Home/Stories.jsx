"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { story1, story2, story3 } from "@/untils/imgimport";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Stories = () => {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const sections = gsap.utils.toArray(".slide");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1), // Moves all slides left
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true, // Pin section
                scrub: 1, // Smooth animation
                snap: 1 / (sections.length - 1), // Snaps to each section
                end: "+=" + window.innerWidth * (sections.length - 1), // Adjusted distance
            },
        });
    }, []);

    return (
        <div className="relative">
            {/* Horizontal Scroll Slider */}
            <div className='text-[4rem] text-[#003274] text-center mt-20 max-[1000px]:text-[2.5rem] leading-[1] max-[1000px]:mb-8 '>Our Success Stories</div>
            <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
                <div ref={sliderRef} className="flex w-[300vw] h-full">
                    <div className="slide flex  items-center justify-center w-screen h-full">
                        <div className='flex flex-row-reverse items-center gap-8 max-[1000px]:flex-col justify-between px-12 max-[1000px]:px-4  max-[1000px]:gap-4 first'>
                            <div className='w-[40%] max-[1000px]:w-full flex flex-col justify-between gap-12 max-[1024px]:gap-4'>
                                <div className=''>
                                    <div className='text-[#003274] text-[2.5rem] '>Quick Lease</div>
                                    <div className='text-[#003274] max-[1024px]:leading-[1]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                                </div>
                                <div>
                                    <div className='text-[#003274] text-[2.5rem] '>95%</div>
                                    <div className='text-[#003274] max-[1024px]:leading-[1]'>Increase in customer engagement with the new mobile app experience.</div>
                                    <button className="text-[#1B45CE] mt-8 className='text-[#1B45CE] border-t-2 border-r-2 border-l-2 border-b-[5px] border-[#1B45CE] py-2 px-5 rounded-full">VIEW CASE STUDY</button>
                                </div>
                            </div>
                            <div className='w-[60%] max-[1000px]:w-full'>
                                <Image className='w-full h-[35rem] max-[1000px]:h-[22rem]  object-cover rounded-[20px]' src={story1} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="slide flex items-center justify-center w-screen h-full ">
                        <div className='flex flex-row-reverse items-center gap-8 max-[1000px]:flex-col justify-between px-12 max-[1000px]:px-4 1000px]:mt-[7rem] second'>
                            <div className='w-[40%] max-[1000px]:w-full flex flex-col justify-between gap-12 max-[1024px]:gap-4'>
                                <div className=''>
                                    <div className='text-[#003274] text-[2.5rem] '>Samira Soomaal</div>
                                    <div className='text-[#003274]  max-[1024px]:leading-[1]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                                </div>
                                <div>
                                    <div className='text-[#003274] text-[2.5rem] '>95%</div>
                                    <div className='text-[#003274]  max-[1024px]:leading-[1]'>Increase in customer engagement with the new mobile app experience.</div>
                                    <button className="text-[#1B45CE] mt-8 className='text-[#1B45CE] border-t-2 border-r-2 border-l-2 border-b-[5px] border-[#1B45CE] py-2 px-5 rounded-full">VIEW CASE STUDY</button>
                                </div>
                            </div>
                            <div className='w-[60%] max-[1000px]:w-full'>
                                <Image className='w-full h-[35rem] max-[1000px]:h-[22rem] object-cover rounded-[20px]' src={story2} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="slide flex items-center justify-center w-screen h-full ">
                        <div className='flex flex-row-reverse items-center gap-8 max-[1000px]:flex-col justify-between px-12 max-[1000px]:px-4 1000px]:mt-[7rem] second'>
                            <div className='w-[40%] max-[1000px]:w-full flex flex-col justify-between gap-12 max-[1024px]:gap-4'>
                                <div className=''>
                                    <div className='text-[#003274] text-[2.5rem] '>Samira Soomaal</div>
                                    <div className='text-[#003274] max-[1024px]:leading-[1]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                                </div>
                                <div>
                                    <div className='text-[#003274] text-[2.5rem] '>95%</div>
                                    <div className='text-[#003274] max-[1024px]:leading-[1]'>Increase in customer engagement with the new mobile app experience.</div>
                                    <button className="text-[#1B45CE] mt-8 className='text-[#1B45CE] border-t-2 border-r-2 border-l-2 border-b-[5px] border-[#1B45CE] py-2 px-5 rounded-full">VIEW CASE STUDY</button>
                                </div>
                            </div>
                            <div className='w-[60%] max-[1000px]:w-full'>
                                <Image className='w-full h-[35rem] max-[1000px]:h-[22rem] object-cover rounded-[20px]' src={story2} alt='' />
                            </div>
                        </div>
                    </div>
                    {/* <div className="slide flex items-center justify-center w-screen h-full ">
                        <div className='flex flex-row-reverse items-center gap-8 max-[1000px]:flex-col justify-between px-12 third'>
                            <div className='w-[40%] max-[1000px]:w-full flex flex-col justify-between gap-12'>
                                <div className=''>
                                    <div className='text-[#003274] text-[2.5rem] '>Raalc App</div>
                                    <div className='text-[#003274]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                                </div>
                                <div>
                                    <div className='text-[#003274] text-[2.5rem] '>95%</div>
                                    <div className='text-[#003274]'>Increase in customer engagement with the new mobile app experience.</div>
                                    <button className="text-[#1B45CE] mt-8 className='text-[#1B45CE] border-t-2 border-r-2 border-l-2 border-b-[5px] border-[#1B45CE] py-2 px-5 rounded-full">VIEW CASE STUDY</button>
                                </div>
                            </div>
                            <div className='w-[60%] max-[1000px]:w-full py-12'>
                                <Image className='w-full h-[35rem] max-[1000px]:h-[30rem] object-cover rounded-[20px]' src={story3} alt='' />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Stories;
