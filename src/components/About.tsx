import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Layers, Database, Globe } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <Database className="absolute top-10 left-10 w-32 h-32 text-white" />
        <Globe className="absolute bottom-20 right-10 w-40 h-40 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Data Science Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-2xl hover:shadow-zinc-900/50 hover:border-zinc-700 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/30 rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform" />
            
            <div className="w-14 h-14 bg-black border border-zinc-800 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <BrainCircuit className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Data Science & Analytics</h3>
            <p className="text-zinc-400 leading-relaxed">
              Data Science & Analytics professional skilled in ML model development, statistics, ETL automation, forecasting, clustering, dashboarding, and building analytics-ready APIs. Strong experience in Python, SQL, Power BI, and applied machine learning for business decision-making.
            </p>
          </motion.div>

          {/* Full Stack Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-2xl hover:shadow-zinc-900/50 hover:border-zinc-700 transition-all duration-300 group relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/30 rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform" />

            <div className="w-14 h-14 bg-black border border-zinc-800 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Layers className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Developer</h3>
            <p className="text-zinc-400 leading-relaxed">
              Full-Stack Developer building scalable, high-performance web applications using React.js, Node.js, Flask, and modern API architectures. Experienced in solving complex backend problems, building secure authentication, and shipping production-ready systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
