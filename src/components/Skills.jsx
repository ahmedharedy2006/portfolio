import React from "react";

export const Skills = () => {
    const skills = [
        { name: "HTML", description: "Markup language for structuring web content." },
        { name: "CSS", description: "Styling and layout for beautiful, responsive designs." },
        { name: "JavaScript", description: "Dynamic, interactive functionality for web apps." },
        { name: "TypeScript", description: "Typed superset of JavaScript for scalable code." },
        { name: "ReactJs", description: "Component-based UI library for building modern SPAs." },
        { name: "NextJs", description: "React framework for server-side rendering and static sites." },
        { name: "C#", description: "Modern, object-oriented language for robust applications." },
        { name: ".NET Core", description: "Cross-platform framework for building backend services." },
        { name: "Blazor", description: ".NET web framework for building interactive UIs with C#." },
        { name: ".NET MAUI", description: "Framework for building cross-platform native apps with .NET." },
        { name: "SQL Server", description: "Relational database management system by Microsoft." },
        { name: "MySQL", description: "Popular open-source relational database system." },
        { name: "AZURE", description: "Cloud platform for deploying, managing, and scaling apps." },
        { name: "Docker", description: "Containerization platform for consistent app deployment." },
        { name: "Git & GitHub", description: "Version control and collaboration for code projects." },

    ];

    return (
        <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((skill, idx) => (
                    <div
                        key={skill.name}
                        className="relative bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg card-hover rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center overflow-hidden border border-primary/30"
                    >
                        {/* Left curly bracket */}
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[4rem] text-purple-600 font-extrabold select-none pointer-events-none opacity-30">
                            {'{'}
                        </span>
                        {/* Right curly bracket */}
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[4rem] text-purple-600 font-extrabold select-none pointer-events-none opacity-30">
                            {'}'}
                        </span>
                        <h3 className="text-2xl font-bold mb-2 text-primary z-10">{skill.name}</h3>
                        <p className="text-muted-foreground z-10">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};