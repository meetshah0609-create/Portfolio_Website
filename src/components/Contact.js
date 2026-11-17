import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 text-center border-t border-slate-800">
      <p className="text-cyan-400 font-mono mb-4">03. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
      <p className="max-w-lg mx-auto text-slate-400 mb-10">
        Whether you have a question, an opportunity, or just want to say hi, my inbox is always open. Looking for opportunities in Full Stack Development and AI/ML Engineering.
      </p>
      <div className="flex justify-center gap-6 mb-12">
        <a href="mailto:your.email@example.com" className="p-4 bg-slate-800 rounded-full hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <Mail className="w-6 h-6" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Contact;