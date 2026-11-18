// import React from 'react';
// import { Mail } from 'lucide-react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-32 text-center border-t border-slate-800">
//       <p className="text-cyan-400 font-mono mb-4">03. What's Next?</p>
//       <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
//       <p className="max-w-lg mx-auto text-slate-400 mb-10">
//         Whether you have a question, an opportunity, or just want to say hi, my inbox is always open. Looking for opportunities in Full Stack Development and AI/ML Engineering.
//       </p>
//       <div className="flex justify-center gap-6 mb-12">
//         <a href="mailto:your.email@example.com" className="p-4 bg-slate-800 rounded-full hover:text-cyan-400 hover:-translate-y-1 transition-all">
//           <Mail className="w-6 h-6" />
//         </a>
//         <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full hover:text-cyan-400 hover:-translate-y-1 transition-all">
//           <FaGithub className="w-6 h-6" />
//         </a>
//         <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full hover:text-cyan-400 hover:-translate-y-1 transition-all">
//           <FaLinkedin className="w-6 h-6" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! To receive these messages in your inbox, link this form to Formspree or Web3Forms.");
  };

  return (
    <section id="contact" className="py-32 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-cyan-400 font-mono mb-4 text-center">03. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-12 text-center">Get In Touch</h2>
        
        <div className="bg-slate-800/40 p-8 md:p-12 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Side: Contact Info */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-3xl font-bold text-slate-100 mb-6">Let's build something together.</h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                  Whether you need a custom web application, a scalable e-commerce solution, or mobile development, NexuraWeb Technologies is ready to help. Drop me a message below.
                </p>
                
                <div className="space-y-6 text-slate-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-lg">Ahmedabad, Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <a href="mailto:your.email@example.com" className="text-lg hover:text-cyan-400 transition-colors">your.email@example.com</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <a href="https://github.com/username" target="_blank" rel="noreferrer" className="p-3 bg-slate-900/80 rounded-xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-3 bg-slate-900/80 rounded-xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="Tell me about your project..." 
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="flex items-center justify-center gap-3 w-full mt-2 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;