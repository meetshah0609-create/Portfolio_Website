import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="py-20 flex flex-col items-start">
      <p className="text-cyan-400 font-mono mb-4">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
        Meet Shah.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
        I build robust digital solutions.
      </h2>
      <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
        I'm a Full Stack Developer specializing in the MERN stack, Python backend engineering, and AI/ML integrations. From scalable e-commerce platforms to cross-platform mobile apps, I engineer end-to-end architectures that solve real-world problems. Currently pursuing my MSc-IT at LJ University.
      </p>
      <a href="#projects" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors font-mono">
        Check out my work
      </a>
    </section>
    
  );
};

export default Hero;