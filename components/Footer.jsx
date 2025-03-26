'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { banner, facebook, insta, linkedin, locaton, logo, mail, phone } from '@/untils/imgimport';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    let ctx = gsap.context(() => {
      gsap.set(footerRef.current, { y: 100, opacity: 0 });

      gsap.to(footerRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom', // Starts when footer enters viewport
          end: 'top center',
          scrub: true,
        },
      });
    }, footerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);


  useEffect(() => {
    const icons = document.querySelectorAll(".magnetic-icon");

    icons.forEach((icon) => {
      const strength = 40; // Strength of attraction

      icon.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = icon.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);

        gsap.to(icon, {
          x: x / 2.5, // Adjust movement sensitivity
          y: y / 2.5,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <div ref={footerRef} className="footer-container relative mt-20 text-white">
      {/* Background Image & Overlay */}
      <Image
        src={banner}
        className="absolute inset-0 object-cover z-[-1] w-full h-full"
        alt="footer"
      />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[10px] z-[-1]" />

      {/* Footer Content */}
      <div className="grid grid-cols-5 max-[1000px]:grid-cols-1 px-12 max-[1024px]:px-4 py-12 gap-8">
        {/* Company Info */}
        <div className="col-span-2 flex flex-col gap-4">
          <Image src={logo} alt="logo" />
          <p className="font-extralight">
            At Quick Digital, we specialize in creating captivating digital marketing services. Our team ensures
            attractive visuals, informational content, and optimized strategies to grow your business.
          </p>
          <ul className="flex gap-6">
            {[facebook, linkedin, insta].map((icon, i) => (
              <li key={i}>
                <Image className='magnetic-icon' src={icon} alt="social-icon" />
              </li>
            ))}
          </ul>
          <p className="font-extralight">© QuickDigitals 2024. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <FooterColumn title="Quick Links" links={['Home', 'About Us', 'Blogs', 'Contact Us']} />

        {/* License */}
        <FooterColumn title="Licence" links={['Privacy Policy', 'Copyright', 'Email Address']} />

        {/* Contact */}
        <FooterColumn
          title="Contact"
          links={[
            { text: '+971-0565394914', icon: phone },
            { text: 'info@quickdigital.com', icon: mail },
            { text: 'Office 2806 Fortune tower, JLT Dubai, UAE', icon: locaton },
          ]}
        />
      </div>
    </div>
  );
};

// Reusable Component for Footer Columns
const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-[1.5rem] font-bold mb-6">{title}</h3>
    <ul className="font-light flex flex-col gap-4">
      {links.map((link, i) => (
        <li key={i} className="font-extralight flex gap-2">
          {link.icon && <Image className="w-[20px] h-full" src={link.icon} alt="icon" />}
          {typeof link === 'string' ? link : link.text}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
