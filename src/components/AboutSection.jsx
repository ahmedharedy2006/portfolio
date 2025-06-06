import { Briefcase, Code, Code2, Code2Icon, Codesandbox, CodeSquareIcon, Github, Linkedin, SunMedium, Twitter, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 max-w-5xl mx-auto mt-16 md:mt-24 p-0 rounded-2xl shadow-xl border border-white/20 dark:border-gray-800/30 overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 dark:bg-gray-800/80 border-b border-white/10 dark:border-gray-800/30">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-4 text-xs text-white/60 font-mono select-none">
          about-me — bash
        </span>
      </div>
      {/* Terminal Body */}
      <div className="bg-black/70 dark:bg-gray-900/70 backdrop-blur-lg p-6 md:p-10 text-white font-mono">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About{" "}
            <span className="text-primary ">
              Me
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Passionate Web Developer & Tech Creator
              </h3>

              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I specialize
                in creating responsive, accessible, and performant web
                applications using modern technologies.
              </p>

              <p className="text-muted-foreground">
                I'm passionate about creating elegant solutions to complex
                problems, and I'm constantly learning new technologies and
                techniques to stay at the forefront of the ever-evolving web
                landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {" "}
                  Get In Touch
                </a>

                <a
                  href=""
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Explore My GitHub</h4>

                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">See my LinkedIn</h4>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Twitter className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Follow Me on X Platform</h4>
                  </div>
                </div>
              </div>

              <div className="flex items-center my-2">
                <div className="flex-grow border-t border-white/10 dark:border-white/10"></div>
                <span className="mx-4 text-sm text-white/60 font-mono">Read My Blogs</span>
                <div className="flex-grow border-t border-white/20 dark:border-white/10"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">

                <div className=" p-2 card-hover">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <center>
                      <Code2 className="h-6 w-6 text-primary" />
                    </center>
                    <h3>Dev.to</h3>
                  </div>

                </div>


                <div className=" p-2 card-hover">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <center>
                      <Codesandbox className="h-6 w-6 text-primary" />
                    </center>
                    <h3>Medium</h3>
                  </div>

                </div>


                <div className=" p-2 card-hover">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <center>
                      <CodeSquareIcon className="h-6 w-6 text-primary" />
                    </center>
                    <h3>C# Corner</h3>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
