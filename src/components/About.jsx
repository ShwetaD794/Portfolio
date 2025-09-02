import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-heading", {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".about-para", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-para",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".cert-list li", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".cert-list",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".exp-left", {
        opacity: 0,
        x: -120,
        duration: 0.5,
        ease: "ease3.out",
        scrollTrigger: {
          trigger: ".exp-left",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".exp-right", {
        opacity: 0,
        x: 120,
        duration: 0.5,
        ease: "ease3.out",
        scrollTrigger: {
          trigger: ".exp-right",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={aboutRef} id="about"
      className="about-container min-h-screen px-6 py-12 flex flex-col items-center pl-62"
    >
      <div className="max-w-3xl w-full">
        <h1 className="about-heading text-4xl font-bold text-cyan-400 mb-6 text-center pb-2">
          About Me
        </h1>
        <p className="about-para text-lg text-gray-500 mb-10 leading-relaxed ">
          I am a Full Stack Developer with a passion for creating dynamic and
          responsive web applications. With a strong foundation in both front-end
          and back-end technologies, I enjoy bringing ideas to life through code.
          My expertise includes HTML, CSS, JavaScript, React, Node.js, Express.js
          and database management. I am committed to continuous learning and
          staying updated with the latest industry trends to deliver high-quality
          solutions. Let's connect and build something amazing together!
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mb-4 mt-8 text-center">
          Certifications
        </h2>
        <ul className="cert-list list-disc list-inside text-gray-500 mb-10 space-y-2 pl-2">
          <li>
            <span className="font-medium text-purple-200">
              Full Stack Web Development
            </span>{" "}
            - Apna College
          </li>
          <li>
            <span className="font-medium text-purple-200">
              Data Structures and Algorithms
            </span>{" "}
            - Apna College
          </li>
          <li>
            <span className="font-medium text-purple-200">
              Advanced Course in Emerging Technologies
            </span>{" "}
            under the Code Unnati Program by SAP and Edunet Foundation
          </li>
          <li>
            <span className="font-medium text-purple-200">
              Responsive Web Design
            </span>{" "}
            - freeCodeCamp
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-400 mb-4 mt-8 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="exp-left bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-bold mb-2">
              Sparks to Ideas - AI/ML Intern{" "}
              <span className="text-sm text-gray-400 font-normal">
                (March 2025, 1 month)
              </span>
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-1 pl-2">
              <li>
                Applied 5+ machine learning algorithms for data preprocessing,
                model building, and evaluation, achieving accuracy improvements of
                up to 85%.
              </li>
              <li>
                Utilized Python, NumPy, Pandas, Scikit-learn, and data
                visualization techniques to analyze datasets with 1,000+ records,
                producing actionable insights.
              </li>
            </ul>
          </div>
          <div className="exp-right bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-bold mb-2">
              CodSoft – Web Development Intern{" "}
              <span className="text-sm text-gray-400 font-normal">
                (Aug 2024, 1 month)
              </span>
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-1 pl-2">
              <li>
                Developed 3 projects (Landing Page, Calculator, Portfolio Website)
                using HTML, CSS, JavaScript.
              </li>
              <li>
                Implemented reusable components and optimized code structure,
                reducing development time by 20% and enhancing maintainability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
