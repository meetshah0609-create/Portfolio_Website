import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-slate-900/80 z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Meet Shah
        </span>
        <div className="space-x-6 text-sm font-medium text-slate-300 hidden md:block">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;