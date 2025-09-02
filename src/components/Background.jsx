import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Background = () => {
  const containerRef = useRef(null);
  const bubbleRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      bubbleRefs.current.forEach((bubble, index) => {
        const offset = (index + 1) * 0.2;
        gsap.to(bubble, {
          x: (clientX - window.innerWidth / 2) * 0.01 * offset,
          y: (clientY - window.innerHeight / 2) * 0.01 * offset,
          ease: "power2.out",
          duration: 1.5,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-10 overflow-hidden"
    >
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (bubbleRefs.current[i] = el)}
          className="absolute rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-30"
          style={{
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(4px)",
          }}
        />
      ))}
    </div>
  );
};

export default Background;
