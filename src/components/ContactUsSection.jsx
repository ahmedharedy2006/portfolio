import React from "react";

export const ContactUsSection = () => {
    return (
        <section id="contact" className="py-20 px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Contact Info</span>
            </h2>
            <div className="relative z-10 rounded-2xl shadow-xl border border-white/20 dark:border-gray-800/30 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 dark:bg-gray-800/80 border-b border-white/10 dark:border-gray-800/30">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="ml-4 text-xs text-white/60 font-mono select-none">
                        contact-me — bash
                    </span>
                </div>
                {/* Terminal Body */}
                <div className="bg-black/70 dark:bg-gray-900/70 backdrop-blur-lg p-8 text-white font-mono text-lg min-h-[220px] text-left">
                    <div className="mb-4">
                        <span className="text-green-400">$</span> <span className="text-white">cat contact.txt</span>
                    </div>
                    <div className="pl-6">
                        <div className="mb-2">
                            <span className="text-cyan-400">[Email]</span> <span className="text-white">ahassan200695@gmail.com</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-cyan-400">[Phone]</span> <span className="text-white">+20 109 418 4590</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-cyan-400">[Location]</span> <span className="text-white">Portsaid, Egypt</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
