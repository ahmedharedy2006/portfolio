import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

const typewriterTexts = [
  "Full-Stack .NET Developer",
  "Cross-Platform .NET Developer",
  "Cloud Developer",
  "Tech-Lead",
  "Open-Source Contributor",
];

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 40 : 90;
  const pauseTime = 1200;
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setTimeout(() => {
      const current = typewriterTexts[textIndex];
      if (!isDeleting && charIndex < current.length) {
        setDisplayedText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typewriterTexts.length);
      }
    }, typingSpeed);
    return () => clearTimeout(intervalRef.current);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between z-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-8 md:mt-0">
          <h1 className="text-2xl md:text-5xl font-bold ">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ahmed
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Haredy
            </span>
          </h1>
          <div className="h-10 md:h-12 flex items-center justify-center md:justify-start">
            <span className="text-xl md:text-3xl font-mono text-primary">
              {displayedText}
              <span className="inline-block w-2 h-6 bg-primary ml-1 align-middle animate-blink rounded-sm"></span>
            </span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Turning complex problems into clean, efficient apps — with a passion for performance and user experience.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#skills" className="cosmic-button">
              View My Skills
            </a>
          </div>
        </div>
        {/* Right: Photo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-54 h-54 md:w-[30rem] md:h-[30rem] rounded-full bg-gradient-to-br from-purple-700 via-indigo-800 to-fuchsia-600 shadow-lg border-4 border-primary flex items-center justify-center">
            <img
              src="/src/assets/hero.png"
              alt="Ahmed Haredy"
              className="w-54 h-54 md:w-[35rem] md:h-[30rem] rounded-full object-cover shadow-xl border-2 border-white/30"
              style={{ background: "transparent" }}
            />
            {/* Celestial effect: subtle stars overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" className="opacity-40">
                <circle cx="50" cy="70" r="4" fill="#fff" />
                <circle cx="120" cy="180" r="3.5" fill="#fff" />
                <circle cx="180" cy="100" r="3" fill="#fff" />
                <circle cx="200" cy="200" r="4" fill="#fff" />
                <circle cx="140" cy="220" r="3.2" fill="#fff" />
                <circle cx="180" cy="120" r="3.7" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <a href="#about">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </a>
    </section>
  );
};

/* Add this to your global CSS if not already present */
// .animate-blink {
//   animation: blink 1s steps(2, start) infinite;
// }
// @keyframes blink {
//   to { visibility: hidden; }
// }
