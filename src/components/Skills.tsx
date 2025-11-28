import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Terminal, Cpu, Globe, Layers } from 'lucide-react';

const dataSkills = [
  "Python", "Pandas", "Scikit-learn", "TensorFlow", 
  "Power BI", "SQL", "MongoDB", "Flask", "EDA", "Forecasting"
];

const devSkills = [
  "React.js", "Node.js", "TypeScript", "Express", 
  "MySQL", "JWT Auth", "Git", "Linux", "Docker", "Spring Boot"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Technical Arsenal</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning advanced data analytics and modern full-stack engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Data Science Column */}
          <SkillCard 
            title="Data Science" 
            icon={<Database className="text-white" size={24} />}
            skills={dataSkills}
            color="blue"
          />

          {/* Full Stack Column */}
          <SkillCard 
            title="Full-Stack" 
            icon={<Code className="text-white" size={24} />}
            skills={devSkills}
            color="emerald"
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, icon, skills, color }: { title: string, icon: React.ReactNode, skills: string[], color: 'blue' | 'emerald' }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const gradientColor = color === 'blue' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="relative p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm overflow-hidden group hover:border-zinc-700 transition-colors"
        >
            {/* Spotlight Effect */}
            <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 40%)`
                }}
            />
            
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            whileHover={{ y: -3, scale: 1.05 }}
                            className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-zinc-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default shadow-sm"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
