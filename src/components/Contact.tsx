import React from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-zinc-400 mb-12 text-lg">
              I'm currently open to opportunities in Data Science and Full-Stack Development. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="font-medium">contact@sumakr.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Phone</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="p-3 bg-zinc-900 rounded-full border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-zinc-900 rounded-full border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 rounded-2xl p-8 text-white border border-zinc-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-black focus:border-white focus:ring-0 outline-none transition-colors placeholder-zinc-600" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-black focus:border-white focus:ring-0 outline-none transition-colors placeholder-zinc-600" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-black focus:border-white focus:ring-0 outline-none transition-colors placeholder-zinc-600" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-black focus:border-white focus:ring-0 outline-none transition-colors resize-none placeholder-zinc-600" placeholder="Your message..." />
              </div>
              <button type="submit" className="w-full py-4 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
