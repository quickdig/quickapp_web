"use client";
import { useEffect } from "react";
import gsap from "gsap";

const Testing = () => {
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
    <div className="flex justify-center items-center gap-10 h-screen bg-gray-100">
      {/* Example Icons */}
      <div className="magnetic-icon w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer shadow-lg">
        🖱️
      </div>
      <div className="magnetic-icon w-16 h-16 bg-red-500 rounded-full flex justify-center items-center cursor-pointer shadow-lg">
        🎯
      </div>
      <div className="magnetic-icon w-16 h-16 bg-green-500 rounded-full flex justify-center items-center cursor-pointer shadow-lg">
        ⭐
      </div>
    </div>
  );
};

export default Testing;
