import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-contact", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div id="contact" className="contact-container px-10  relative z-10 pl-62 mb-32">
      <h1 className="text-center mb-20 text-3xl font-bold text-white">
        Contact Me
      </h1>

      <div className="contact-item flex gap-16 justify-center flex-wrap">
        <a
          href="mailto:shwetadhote8s@gmail.com"
          className="animate-contact text-center text-white text-2xl flex flex-col items-center gap-2 hover:text-red-400 cursor-pointer relative z-50"
        >
          <i className="fa-solid fa-envelope text-4xl"></i>
          <span className="text-xl">Email</span>
        </a>

        <a
          href="https://www.instagram.com/shweta_dhote1/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-contact text-center text-white text-2xl flex flex-col items-center gap-2 hover:text-pink-400 cursor-pointer relative z-50"
        >
          <i className="fa-brands fa-instagram text-4xl"></i>
          <span className="text-xl">Instagram</span>
        </a>

        <a
          href="https://github.com/ShwetaD794"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-contact text-center text-white text-2xl flex flex-col items-center gap-2 hover:text-gray-400 cursor-pointer relative z-50"
        >
          <i className="fa-brands fa-github text-4xl"></i>
          <span className="text-xl">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/shweta-dhote-a7b7a52a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-contact text-center text-white text-2xl flex flex-col items-center gap-2 hover:text-blue-500 cursor-pointer relative z-50"
        >
          <i className="fa-brands fa-linkedin text-4xl"></i>
          <span className="text-xl">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
