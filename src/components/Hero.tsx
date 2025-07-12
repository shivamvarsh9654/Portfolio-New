
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Shivam Varshney
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8">
            Frontend Developer
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate frontend developer specializing in React and modern web technologies.
            I craft responsive, user-friendly interfaces with clean code and innovative solutions.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/shivamvarsh9654"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-emerald-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-varshney-b1a118258/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-emerald-400" />
            </a>
            <a
              href="mailto:shivamvarshney504@gmail.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-emerald-400" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 rounded-full transition-all duration-200 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 rounded-full transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ">
          <ArrowDown className="w-6 h-6 text-slate-400 " />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
