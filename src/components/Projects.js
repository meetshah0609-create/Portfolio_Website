import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <h3 className="text-2xl font-bold mb-12 flex items-center">
        <span className="text-cyan-400 font-mono mr-3">02.</span> Featured Projects
      </h3>

      <div className="space-y-20">
        {/* Project 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 bg-slate-800 rounded-xl aspect-video border border-slate-700 flex items-center justify-center relative overflow-hidden group">
            <span className="text-slate-500 font-mono">Cup2Eat Preview</span>
            <div className="absolute inset-0 bg-cyan-500/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
          </div>
          <div className="md:col-span-5 md:text-right flex flex-col md:items-end">
            <p className="text-cyan-400 font-mono text-sm mb-2">Featured Project</p>
            <h4 className="text-2xl font-bold mb-4">Cup2Eat Platform</h4>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-slate-300 mb-4 shadow-xl z-10 relative">
              A comprehensive food-tech e-commerce platform featuring customer and admin dashboards, product catalogs, cart management, GST invoice generation, and integrated WhatsApp support.
            </div>
            <ul className="flex flex-wrap gap-4 text-sm font-mono text-slate-400 mb-6 md:justify-end">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400 transition-colors"><FaGithub className="w-5 h-5" /></a>
              <a href="https://cup2eat.vercel.app" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><ExternalLink className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 flex flex-col items-start">
            <p className="text-blue-400 font-mono text-sm mb-2">Featured Project</p>
            <h4 className="text-2xl font-bold mb-4">CureNex</h4>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-slate-300 mb-4 shadow-xl z-10 relative">
              A patient-doctor healthcare management mobile application built for seamless appointment scheduling, medical record tracking, and real-time cloud database synchronization.
            </div>
            <ul className="flex flex-wrap gap-4 text-sm font-mono text-slate-400 mb-6">
              <li>Flutter</li>
              <li>Dart</li>
              <li>Cloud DB</li>
              <li>REST APIs</li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><FaGithub className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="md:col-span-7 bg-slate-800 rounded-xl aspect-video border border-slate-700 flex items-center justify-center relative overflow-hidden group md:order-last order-first">
            <span className="text-slate-500 font-mono">CureNex App Preview</span>
            <div className="absolute inset-0 bg-blue-500/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 bg-slate-800 rounded-xl aspect-video border border-slate-700 flex items-center justify-center relative overflow-hidden group">
            <span className="text-slate-500 font-mono">GearGuard Dashboard</span>
            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
          </div>
          <div className="md:col-span-5 md:text-right flex flex-col md:items-end">
            <p className="text-emerald-400 font-mono text-sm mb-2">Featured Project</p>
            <h4 className="text-2xl font-bold mb-4">GearGuard</h4>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-slate-300 mb-4 shadow-xl z-10 relative">
              An enterprise-grade asset and maintenance management tracking system designed to streamline inventory lifecycles and reduce operational downtime.
            </div>
            <ul className="flex flex-wrap gap-4 text-sm font-mono text-slate-400 mb-6 md:justify-end">
              <li>React</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-400 transition-colors"><FaGithub className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;