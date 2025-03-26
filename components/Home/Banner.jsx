'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { circle, logo, scroll } from '@/untils/imgimport';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useEffect(() => {
    gsap.to('.dfdfdffd', {
      scrollTrigger: {
        trigger: '.dfdfdffd',
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
        markers: false,
      },
      "mask-size": "3400%",
      "mask-position": "54.9913% 53.993%",
      ease: 'power3.inOut',
    });

    gsap.fromTo(
      '.dfdfdffd',
      {
        "mask-size": "60%",
        "mask-position": "54.9913% 53.993%",
      },
      {
        "mask-size": "3400%",
        "mask-position": "54.9913% 53.993%",
        scrollTrigger: {
          trigger: '.dfdfdffd',
          start: 'top 10%',
          end: '+=100%',
          scrub: 1,
          markers: false,
        },
        ease: 'power3.inOut',
      }
    );
  }, []);

  useEffect(() => {
    // Hide scroll image only when user actually scrolls
    gsap.to('.scroll-img', {
      opacity: 0, // Hide image
      duration: 0.5, // Smooth fade-out
      scrollTrigger: {
        trigger: '.dfdfdffd',
        start: 'top+=48% center', // Start fading out only when 10% of section is visible
        end: 'top+=40% center', // Fully hidden when 40% scrolled
        scrub: true, // Smooth transition
      },
    });

  }, []);


  return (
    <>
      <div className="relative max-[1000px]:hidden">
        <div className=" h-[100vh] relative dfdfdffd">
          <div className='container mx-auto px-6 mt-4'>
            <div className='flex justify-between items-center '>
              <div>
                <Image src={logo} alt='' />
              </div>
              <div className='flex items-center gap-6 max-[1024px]:flex-col'>
                <ul className='flex gap-4 max-[1024px]:flex-col'>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                </ul>
                <button className='text-[#1B45CE] border-t-2 border-r-2 border-l-2 border-b-[5px] border-[#1B45CE] py-2 px-5 rounded-full'>SPEAK TO AN EXPERT</button>
              </div>
            </div>
          </div>

          <video className='container mx-auto rounded-[35px] h-[80vh] object-cover ' autoPlay={true} loop muted src="/webImages/banner.mp4" type="video/mp4"></video>

        </div>
        <Image src={scroll} alt='scroll' className='filter contrast-20 opacity-[0.8] absolute scroll-img transition-opacity duration-500 w-[13rem] mx-auto left-0 right-0 bottom-[45rem] z-30 ' />
      </div>
      <div className="relative min-[1000px]:hidden max-[1024px]:overflow-hidden ">
        <div className=" h-[100vh] relative">
          <div className='container header mx-auto px-6 pt-4 max-[1024px]:absolute max-[1024px]:right-[-25rem]  max-[1024px]:bg-black'>
            <div className='flex justify-between items-center max-[1024px]:justify-start max-[1024px]:flex-col'>
              <div className='max-[1024px]:w-full'>
                <Image src={logo} alt='' />
              </div>
              <div className='flex items-center max-[1024px]:items-start gap-6 max-[1024px]:flex-col max-[1024px]:w-full'>
                <ul className='flex gap-4 max-[1024px]:flex-col '>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                </ul>
                <button className='text-[#1B45CE] border-t-2 border-r-2 border-l-2 border-b-[5px] border-[#1B45CE] py-2 px-5 rounded-full'>SPEAK TO AN EXPERT</button>
              </div>
            </div>
          </div>

          <video className='container mx-auto rounded-[35px] h-[80vh] object-cover ' autoPlay={true} loop muted src="/webImages/banner.mp4" type="video/mp4"></video>

        </div>
      </div>


    </>
  );
};

export default Banner;
