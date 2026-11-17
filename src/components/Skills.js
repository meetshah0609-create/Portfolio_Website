import React from 'react';
import { Code2, Database, Smartphone, BrainCircuit } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-slate-800">
      <h3 className="text-2xl font-bold mb-12 flex items-center">
        <span className="text-cyan-400 font-mono mr-3">01.</span> Technical Arsenal
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
          <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
          <h4 className="text-lg font-bold mb-2">Frontend</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>React.js & Tailwind CSS</li>
            <li>Redux Toolkit</li>
            <li>Responsive UI/UX</li>
          </ul>
        </div>
        
        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
          <Database className="w-8 h-8 text-blue-400 mb-4" />
          <h4 className="text-lg font-bold mb-2">Backend & DB</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>Node.js & Express</li>
            <li>Python & SQLAlchemy</li>
            <li>MongoDB & SAP HANA</li>
          </ul>
        </div>

        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
          <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
          <h4 className="text-lg font-bold mb-2">Mobile</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>Flutter</li>
            <li>Dart</li>
            <li>Cross-Platform APIs</li>
          </ul>
        </div>

        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
          <BrainCircuit className="w-8 h-8 text-emerald-400 mb-4" />
          <h4 className="text-lg font-bold mb-2">AI/ML & Tools</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>Pandas & NumPy</li>
            <li>NLTK & Scikit-learn</li>
            <li>Git & Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;