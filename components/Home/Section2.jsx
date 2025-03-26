"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";  // Make sure to import ScrollTrigger
import { figma, flutter, laravel, dart, appstore, playstore } from '@/untils/imgimport';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Section2 = () => {
  useEffect(() => {
    const text = document.querySelector("h1");
    const splitText = text.textContent.split("");  // Split text into individual letters

    // Clear the existing content
    text.innerHTML = "";

    // Wrap each letter in a span
    splitText.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      text.appendChild(span);
    });

    // Animate each letter with GSAP (faster animation speed)
    gsap.from("h1 span", {
      opacity: 0.2,
      y: 30,  // Reduced y value for a more subtle movement
      stagger: 0.03,  // Reduced stagger time for faster animation
      scrollTrigger: {
        trigger: "h1",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,  // Faster scrub to sync animation with scroll more quickly
        markers: false,
      },
    });

    // Change color of the "diff" word dynamically on scroll
    gsap.to(".diff", {
      color: "#EB5939",  // Change color to the desired one
      scrollTrigger: {
        trigger: ".diff",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,  // Faster scrub for quicker color change
        markers: false,
      },
    });

    // Animate the images in an infinite up and down motion
    gsap.to(".img", {
      y: "-10px", // Move the images up and down
      duration: 2,  // Duration of one complete cycle (up and down)
      repeat: -1,   // Infinite repeat
      yoyo: true,   // Alternate between up and down
      stagger: 0.5, // Add some stagger for a varied animation start time
    });
  }, []);

  return (
    <div className="flex bbb items-center justify-center py-[7rem] m-auto max-[1024px]:pb-[2rem] max-[1024px]:pt-[5rem] ">
      <div className="flex items-center justify-center max-[1000px]:flex-col">
        <div className="w-[40%] max-[1000px]:w-full relative max-[1000px]:hidden">
          <div className=" ">
            <Image className="absolute img h-[100px] w-[100px] left-[7rem] top-[-179px] " src={figma} alt="figma" />
            <Image className="absolute img h-[100px] w-[100px] left-[358px] top-[-200px]" src={flutter} alt="flutter" />
            <Image className="absolute img h-[100px] w-[100px] top-[1px] left-[29rem] " src={laravel} alt="laravel" />
            <Image className="absolute img h-[100px] w-[100px] top-[-53px] left-[284px] " src={dart} alt="dart" />
            <Image className="absolute img h-[100px] w-[100px] bottom-[-6.2rem] left-[7rem] " src={appstore} alt="appstore" />
            <Image className="absolute img h-[100px] w-[100px] left-[16rem] top-[8.05rem]" src={playstore} alt="playstore" />
          </div>
        </div>
        <div id="smooth-wrapper" className="w-[60%] max-[1000px]:w-full">
          <div id="smooth-content">
            <div className="text">
              <h1 className="text-[3.5rem] max-[1000px]:text-[2.5rem] max-[1000px]:text-center max-[1000px]:px-4 leading-[1] text-[#003274] mx-auto w-[80%] max-[1000px]:w-full">
                Working across <span className="text-[#EB5939] diff">different stages</span> of the design process has shown me where I can make an impact.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
