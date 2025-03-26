'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { phoneleft, phoneright, mobile1, mobile2, mobile3, mobile4, mobile5, mobile6, mobile7, mobile8, mobile9, mobile10, mobile11, mobile12, handmobile } from '@/untils/imgimport';

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const length = path.getTotalLength(); // Get the full path length

        // Set initial stroke properties (fully hidden initially)
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length // Start hidden
        });

        gsap.to(path, {
            strokeDashoffset: 0, // Animate to fully drawn
            duration: 2,
            ease: "none",
            scrollTrigger: {
                trigger: path,
                start: "top 80%", // Start drawing when it enters viewport
                end: "bottom 60%", // Finish drawing
                scrub: 1, // Smooth scroll animation
            },
        });
    }, []);

    useEffect(() => {
        gsap.to('.data-p-l', {
            xPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.data-p-l',
                start: 'top bottom', // When top of .data-p-l hits the bottom of the viewport
                end: 'bottom top',   // When bottom of .data-p-l hits the top of the viewport
                scrub: 1,  // Adjusted to slow it down
                markers: false,
                onEnter: () => {
                    // You can add any custom action here when entering the section
                }
            },
        });

    }, []);

    return (
        <>
            <section className="development_dev__mvT8y mt-[-15rem] max-[1000px]:mt-[-36rem]" id="development">
                <div className="dev-line_line__TjJJ9">
                    <svg
                        className="dev-line_line_svg__b39Po h-auto"
                        viewBox="0 0 1728 1101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            ref={pathRef}
                            d="M1852 1C676.888 25.4306 272.969 1134.6 602.782 1098.75C932.595 1062.9 768.91 829.197 610.111 733.104C451.312 637.01 160.86 662.526 -43 773.821"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            stroke="#D5FC6B"
                        />
                    </svg>
                </div>
                <div className="development_contentbox__iavUA">
                    <div className="marquee_marquee__VG_lt development_dev_marquee__KAlMB">
                        <div className="marquee_marquee_wrapper__4R_lX">
                            <div className="marquee_marquee_item__zgJ8c">
                                <div className="marquee_marquee_repeater__OjBTa">
                                    <p className="development_dev_marquee_text__X6dIZ data-p-l text-[#0032740D] max-[1000px]:hidden">Data driven user focused value based</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto development_dev_container__hYcJC ">
                        <div className="dev-content_dev_content__qe_VU max-[1024px]:pt-[6rem]">
                            <h2 className="dev-content_dev_title__8B4rF max-[700px]:flex max-[700px]:flex-col">
                                <span className='leading-[1] text-[3.7rem]'>
                                    <span className='text-[#003274] block'>Smart</span>
                                    <span className='text-[#003274] block'>Development</span>
                                </span>
                                <span className="dev-content_dev_title_stars__Hn0_F max-[1024px]:hidden">**</span>
                            </h2>
                            <div className="dev-content_dev_bottom__7wEHk">
                                <p className="dev-content_dev_text__OwL41 max-[1024px]:text-center">Making your business outstanding is a science. We take it (a) seriously and (b) creatively.</p>
                                <div className="dev-content_dev_controls__qZqU7">
                                    <button
                                        className='text-[#1B45CE] border-t-2 border-r-2 border-l-2 border-b-[5px] border-[#1B45CE] py-2 px-5 rounded-full'>Check Our Portfolio</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="development_dev_phones__dI9l6 flex">
                    <Image alt="phone-left"
                        className="development_dev_phones_left__xr3o6"
                        src={phoneleft} />
                    <Image alt="phone-right"
                        className="development_dev_phones_right__RW4lx"
                        src={phoneright} />
                </div>
                <div className="development_dev_screens__L4P5Z">
                    <div className="development_dev_screens_wrapper__iDJ0j">
                        <div className="dev-screens_screens__ULiw1">
                            <ul className="dev-screens_screens_list__QZ0lc">
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile1} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile2} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h"></div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile3} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile4} />
                                    </div>
                                </li>
                            </ul>
                            <ul className="dev-screens_screens_list__QZ0lc">
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile5} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile6} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h"></div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile7} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile8} />
                                    </div>
                                </li>
                            </ul>
                            <ul className="dev-screens_screens_list__QZ0lc">
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile9} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile10} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h"></div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile11} />
                                    </div>
                                </li>
                                <li className="dev-screens_screens_item__x7szP">
                                    <div className="dev-media_media__eQq_h">
                                        <Image alt="media"
                                            className="dev-media_media_preview__hjQcj"
                                            src={mobile12} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="development_dev_hand_wrapper__yXHKJ">
                        <div className="development_dev_hand__1L3Gd">
                            <Image alt="hand" className="development_dev_hand_image__s8v9J"
                                src={handmobile} />
                            <div className="dev-video_video__tvEzd">
                                <video autoPlay={true} loop muted src="/webImages/phone.mp4" type="video/mp4"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section1;
