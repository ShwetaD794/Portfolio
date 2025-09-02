import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar"; 

export default function Home() {
  const nameRef = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.set(
      [nameRef.current, block1Ref.current, block2Ref.current, btnRef.current],
      { opacity: 0, y: -20 }
    );

    gsap.to(
      [nameRef.current, block1Ref.current, block2Ref.current, btnRef.current],
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      }
    );
    const btn = btnRef.current;
    const mouseenter = () => {
  gsap.to(btn, {
    backgroundImage: "linear-gradient(140deg, #E6E6FA, #23143dff, #E6E6FA)",
    backgroundSize: "200% auto",
    duration: 1.2,
    ease: "linear",
    repeat: 1,
    yoyo: true,
  });
};


    btn.addEventListener("mouseenter", mouseenter);

    return () => {
      btn.removeEventListener("mouseenter", mouseenter);
    };
  }, []);

  return (
    <div id="home" className="flex min-h-screen bg-black text-white pl-42 w-full gap-2">
      <div className="p-8 flex-1 flex flex-col justify-center items-start">
        <h1 ref={nameRef} className="text-3xl font-bold">
          Hi, I am <span className="text-purple-400">Shweta Dhote</span>
        </h1>
        <p className="text-gray-300 text-lg mt-3">
          <span ref={block1Ref} className="block">a Full Stack Developer</span>
          <span ref={block2Ref} className="block">
            passionate about building robust, modern web platforms for real-world impact.
          </span>
        </p>
        <a 
          ref={btnRef}
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition z-20 inline-block cursor-pointer mt-3"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
