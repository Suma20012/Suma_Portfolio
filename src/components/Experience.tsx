import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "SparkeeTech",
    period: "Oct 2025 – Present",
    type: "dev",
    points: [
      "Built platforms for 1,000+ users.",
      "Developed React + Node + MySQL applications with 20–25% faster load time.",
      "Reduced UI bugs by 30% via reusable components.",
      "Engineered secure JWT + RBAC authentication.",
      "Improved API latency by 18%."
    ]
  },
  {
    role: "AI & Backend Intern",
    company: "AiKshetratech",
    period: "Previous",
    type: "hybrid",
    points: [
      "Built and optimized Flask backend modules with 35% faster processing.",
      "Automated Linux workflows reducing manual tasks by 50%."
    ]
  },
  {
    role: "AI/ML Intern",
    company: "Scontinent Technologies",
    period: "Previous",
    type: "data",
    points: [
      "Built ETL pipelines improving data readiness speed by 40%.",
      "Assisted with backend APIs and dashboards."
    ]
  }
];

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 bg-zinc-950 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Career Journey</h2>
          <p className="text-zinc-400">A timeline of impactful contributions and technical growth.</p>
        </motion.div>

        <div className="relative">
          {/* Animated Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2 h-full">
             <motion.div 
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-white via-zinc-400 to-transparent"
             />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-0 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-white rounded-full translate-y-8 -translate-x-[7px] md:-translate-x-[8px] z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-20 pl-12' : 'md:pr-20 pl-12'}`}>
                  <div className="group p-8 bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-500 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">{exp.role}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5 group-hover:border-white/20 transition-colors">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-zinc-300 mb-6 font-medium">
                      <Briefcase size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                      {exp.company}
                    </div>

                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                          <CheckCircle2 size={14} className="mt-1 text-zinc-600 flex-shrink-0 group-hover:text-green-500 transition-colors" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for opposite side */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
