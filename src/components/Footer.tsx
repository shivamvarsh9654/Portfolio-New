
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Shivam Varshney
            </h3>
            <p className="text-slate-400 mt-2">
              Frontend Developer crafting modern web experiences
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/shivamvarsh9654"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Github className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-varshney-b1a118258"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
            </a>
            <a
              href="mailto:shivamvarshney504@gmail.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
