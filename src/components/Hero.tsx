
import { Github, Mail, Link } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I create exceptional digital experiences with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:contact@example.com"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
