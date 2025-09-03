import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", img: "html-5.png" },
  { name: "CSS", img: "css-3.png" },
  { name: "JavaScript", img: "js.png" },
  { name: "React", img: "react.png" },
  { name: "Node.js", img: "nodejs.png" },
  { name: "MongoDB", img: "mongodb.png" },
  { name: "MySQL", img: "mySql.png" },
  { name: "Machine Learning", img: "ml.png" },
  { name: "Java", img: "java.png" },
  { name: "Python", img: "python.png" },
  { name: "Express.js", img: "express.png" },
  { name: "IOT", img: "iot.png" },
  { name: "Bootstrap", img: "bootstrap.png" },
  { name: "DSA", img: "dsa.png" },
  { name: "DBMS", img: "dbms.png" },  
  { name: "RESTFUL API", img: "api.png" },  

];

export default function SkillsReveal() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0.2,
      },
      {
        x: 0,
        opacity: 0.9,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "restart none none none"
        },
      }
    );
    
  }, []);

  return (
    <div id="skills" className="min-h-screen flex items-center justify-center bg-transparent overflow-x-hidden pl-42 py-20">
      <div className="flex flex-col items-center w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {skills.map((skill, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className=" w-32 h-28 bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-md flex items-center gap-4 opacity-20 w-full sm:w-[35%] md:w-[20%] max-w-[260px]"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <p className="text-xl font-semibold text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
