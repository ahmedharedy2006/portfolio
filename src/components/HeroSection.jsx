import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold ">
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

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        {/* Right: Photo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-700 via-indigo-800 to-fuchsia-600 shadow-lg border-4 border-primary flex items-center justify-center">
            <img
              src="/src/assets/hero.png"
              alt="Ahmed Haredy"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-2 border-white/30"
              style={{ background: "transparent" }}
            />
            {/* Celestial effect: subtle stars overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" className="opacity-40">
                <circle cx="50" cy="60" r="3" fill="#fff" />
                <circle cx="120" cy="180" r="2.5" fill="#fff" />
                <circle cx="220" cy="90" r="2" fill="#fff" />
                <circle cx="300" cy="250" r="3" fill="#fff" />
                <circle cx="180" cy="300" r="2.2" fill="#fff" />
                <circle cx="320" cy="160" r="2.7" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
