import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

const projects = [
  // Data Science
  {
    id: 1,
    title: "Sales Forecasting",
    category: "data",
    tech: ["Python", "Time-series", "Pandas"],
    desc: "Time-series forecasting for demand planning to optimize inventory.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Customer Behavior Analysis",
    category: "data",
    tech: ["Clustering", "Scikit-learn", "Seaborn"],
    desc: "Clustering algorithms to derive insights on customer retention.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", 
    demo: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Job Placement Prediction",
    category: "data",
    tech: ["ML Models", "Dashboarding", "Python"],
    desc: "Machine learning models with interactive dashboards for prediction.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 4,
    title: "AI MockCoder (NLP)",
    category: "data",
    tech: ["NLP", "Python", "AI"],
    desc: "AI-based question generator for coding interview prep.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  },
  // Full Stack
  {
    id: 5,
    title: "Campus to Company",
    category: "dev",
    tech: ["React", "Node.js", "MySQL"],
    desc: "Multi-role dashboard platform connecting students to opportunities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 6,
    title: "EduSpark EMS",
    category: "dev",
    tech: ["React", "Firebase", "Tailwind"],
    desc: "Comprehensive Education Management System for schools.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 7,
    title: "AI MockCoder Web",
    category: "dev",
    tech: ["Flask", "React", "AI"],
    desc: "Web interface for the AI coding test generator.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  },
  {
    id: 8,
    title: "Electronic Voting System",
    category: "dev",
    tech: ["Spring Boot", "MySQL", "Security"],
    desc: "Secure voting flow with robust backend architecture.",
    image: "https://images.unsplash.com/photo-1540910419868-474947cebacb?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  }
];

export const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'data' | 'dev'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-zinc-400 max-w-md">A curated collection of projects showcasing data intelligence and engineering precision.</p>
          </motion.div>
          
          {/* Filter Buttons */}
          <div className="flex p-1 bg-zinc-900/50 rounded-full border border-zinc-800 backdrop-blur-sm">
            {[
              { id: 'all', label: 'All' },
              { id: 'data', label: 'Data Science' },
              { id: 'dev', label: 'Full Stack' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  filter === btn.id
                    ? "bg-white text-black shadow-lg"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col h-full perspective-1000 hover:shadow-2xl hover:shadow-zinc-900/50 transition-shadow"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
        
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 z-20">
          <a href={project.github} className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
            <Github size={18} />
          </a>
          <a href={project.demo} className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col relative z-20 bg-zinc-900/90 backdrop-blur-sm">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((t: string, i: number) => (
            <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 text-zinc-400 rounded border border-white/5 font-medium">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">{project.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1 line-clamp-3">
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
};
