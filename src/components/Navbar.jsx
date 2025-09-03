import { useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    const links = gsap.utils.toArray(".nav-link");

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          background: "linear-gradient(to right, #a855f7 0%, #9333ea 100%)",
          color: "#000",
          duration: 1,
          y: 5,
          ease: "back.out(1.7)"
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          background: "transparent",
          color: "#fff",
          duration: 1,
          y: -5,
          ease: "back.out(1.7)"
        });
      });
    });

  }, []);

  return (
    <nav className="navbar fixed left-0 top-0 h-full w-38 flex flex-col items-center justify-start py-4 shadow-md space-y-10 bg-transparent text-white z-50 text-2xl">
      <a href="#home" className="nav-link text-l p-2 rounded-lg cursor-pointer">Home</a>
      <a href="#about" className="nav-link text-l p-2 rounded-lg cursor-pointer">About</a>
      <a href="#skills" className="nav-link text-l p-2 rounded-lg cursor-pointer">Skills</a>
      <a href="#projects" className="nav-link text-l p-2 rounded-lg cursor-pointer">Projects</a>
      <a href="#contact" className="nav-link text-l p-2 rounded-lg cursor-pointer">Contact</a>
    </nav>
  );
}
