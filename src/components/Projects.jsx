import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ image, desc, techStack }) => {
  const containerRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(detailsRef.current, { x: "120%" });

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",   
          end: "+=100%",      
          scrub: true,
          pin: true,          
          markers: false,
        },
      }).to(detailsRef.current, { x: 0, duration: 1, opacity: 0.95 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="projects"
      className="relative w-full h-[480px] sm:h-[520px] md:h-[600px] mb-32 flex items-center justify-center overflow-x-hidden px-2 "
    >
      <div className="absolute w-[95vw] max-w-[850px] h-[480px] sm:h-[520px] md:h-[500px] bg-white shadow-xl z-10 flex items-center justify-center text-center text-black rounded-3xl ">
        <img src={image} alt="project" className="w-[90%] h-[90%] object-contain" />
      </div>

      <div
        ref={detailsRef}
        className="absolute w-[95vw] max-w-[850px] h-[480px] sm:h-[520px] md:h-[500px] bg-zinc-900 shadow-xl z-20 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 text-white rounded-3xl gap-4"
      >
        <p className="text-xs sm:text-sm md:text-lg">{desc}</p>

        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-purple-400">Tech Stack</h3>
          <ul className="list-disc list-inside text-xs sm:text-sm md:text-lg md:text-start text-gray-400 ">
            {techStack.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function ProjectCards() {
  const projects = [
    {
      id: 1,
      image: "/project2.png",
      desc: "A fully responsive Airbnb clone built using React. Features include property listings, search filters, booking functionality, and an intuitive user interface inspired by Airbnb's design. This project showcases modern frontend development skills and dynamic UI rendering.",
      techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 2,
      image: "/zerodha.png",
      desc: "A replica of the Zerodha trading dashboard designed with React and Tailwind CSS. It includes components like holdings, orders, funds, and watchlist — emulating the real Zerodha interface. This project demonstrates attention to detail, clean UI, and modular component structure.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 3,
      image: "/project3.jpg",
      desc: "A real-time driver monitoring system developed using Raspberry Pi, OpenCV, and MediaPipe. It detects drowsiness, yawning, and head tilts, and issues instant alerts. Features also include automatic vehicle control using GPIO, enhancing road safety through AI-based monitoring.",
      techStack: ["Python", "OpenCV", "MediaPipe", "Raspberry Pi", "GPIO"],
    },
  ];

  return (
    <div className="py-10 md:py-20 bg-transparent overflow-x-hidden pl-[52px]">
      <h2 className="text-5xl md:text-3xl text-center font-bold mb-8 md:mb-12 pl-35">My Projects</h2>
      {projects.map((proj) => (
        <ProjectCard key={proj.id} {...proj} />
      ))}
    </div>
  );
}
