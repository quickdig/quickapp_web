"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { s1, s11, s2, s22, s3, s33, s4, s44, s5, s55 } from "@/untils/imgimport";
gsap.registerPlugin(ScrollTrigger);
const Section4 = () => {
  const sectionRef = useRef(null);
  const testing = useRef(null);
  const azharRef = useRef(null);
  const samiRef = useRef(null);
  const affanRef = useRef(null);
  const ashanRef = useRef(null);
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
        testing.current,
        { y: 1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power0.out" }
      ).to(testing.current, { y: -320, opacity: 1, duration: 0.5, ease: "power20inOut" });
      tl.fromTo(
        azharRef.current,
        { y: 1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power0.out" }
      ).to(azharRef.current, { y: -319, opacity: 1, duration: 0.5, ease: "power0.inOut" });
      tl.fromTo(
        samiRef.current,
        { y: 1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power0.out" }
      ).to(samiRef.current, { y: -318, opacity: 1, duration: 0.5, ease: "power20inOut" });
      tl.fromTo(
        affanRef.current,
        { y: 1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power0.out" }
      ).to(affanRef.current, { y: -322, opacity: 1, duration: 0.5, ease: "power0.inOut" });
      tl.fromTo(
        ashanRef.current,
        { y: 1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power0.out" }
      ).to(ashanRef.current, { y: -318, opacity: 1, duration: 0.5, ease: "power0.inOut" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="container relative mx-auto max-[1000px]:hidden">
      <div className="text-[#003274] text-[4rem] text-center absolute w-fit left-0 right-0 mx-auto top-[-15rem] ">Developing Bridge To The Future</div>
      <div ref={sectionRef} >
        <div className="relative  w-[57rem] mx-auto h-[100vh]">
          <Image ref={testing} className="absolute top-0 left-0" src={s1} alt="" />
          <Image ref={azharRef} className="absolute top-0 right-0" src={s2} alt="" />
          <Image ref={samiRef} className="absolute right-[6.1rem] top-[3.4rem]" src={s3} alt="" />
          <Image ref={affanRef} className="absolute top-[15rem] left-0" src={s4} alt="" />
          <Image ref={ashanRef} className="absolute top-[6rem] right-0" src={s5} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Section4;
