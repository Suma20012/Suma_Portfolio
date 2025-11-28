import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Database, Code2 } from 'lucide-react';

// Star Component
const Star = ({ delay, size, top, left }: { delay: number, size: number, top: string, left: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, delay: delay, ease: "easeInOut" }}
        className="absolute rounded-full bg-white"
        style={{ width: size, height: size, top, left }}
    />
);

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Generate random stars
  const [stars, setStars] = useState<Array<{delay: number, size: number, top: string, left: string}>>([]);
  
  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map(() => ({
        delay: Math.random() * 5,
        size: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
    }));
    setStars(newStars);
  }, []);

  return (
    <section 
      ref={targetRef}
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 bg-black relative overflow-hidden"
    >
      {/* Dynamic Background - Starfield & Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {stars.map((star, i) => (
            <Star key={i} {...star} />
        ))}

        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-purple-900/20 blur-[120px] animate-pulse-glow mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[100px] animate-float-slow mix-blend-screen" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-widest text-zinc-300 mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for work
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
                Hi, I’m <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl rounded-full"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">Suma.</span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A dual-specialist bridging <span className="text-white font-medium border-b border-white/20 pb-0.5">Data Science</span> intelligence with <span className="text-white font-medium border-b border-white/20 pb-0.5">Full-Stack</span> engineering to build scalable, data-driven applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link
                  to="portfolio"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all cursor-pointer overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <div className="flex items-center justify-center gap-2 relative z-10">
                    <Database size={18} />
                    <span>View Data Portfolio</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                
                <Link
                  to="portfolio"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="group px-8 py-4 bg-transparent text-white border border-zinc-700 rounded-full font-semibold hover:border-white hover:bg-white/5 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Code2 size={18} />
                    <span>View Dev Portfolio</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Image Placeholder with Parallax Floating Elements */}
          <div className="flex-1 flex justify-center lg:justify-end relative perspective-1000">
            
            {/* Floating Badge 1 */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 lg:-right-8 bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-zinc-800 z-30 hidden md:flex items-center gap-3 shadow-2xl ring-1 ring-white/10"
            >
              <div className="p-2.5 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/5">
                <Database className="text-white" size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-400">Expertise</div>
                <div className="text-sm font-bold text-white">Data Science</div>
              </div>
            </motion.div>
            
            {/* Floating Badge 2 */}
            <motion.div 
              animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 lg:left-4 bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-zinc-800 z-30 hidden md:flex items-center gap-3 shadow-2xl ring-1 ring-white/10"
            >
              <div className="p-2.5 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-white/5">
                <Code2 className="text-white" size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-400">Expertise</div>
                <div className="text-sm font-bold text-white">Full Stack</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative z-20"
              whileHover={{ scale: 1.02, rotate: 0 }}
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] bg-zinc-900 relative overflow-hidden group shadow-2xl shadow-black/50">
                {/* Image Container */}
                <div className="absolute inset-0 bg-zinc-800">
                   <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                        alt="Suma K R"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                
                {/* Inner Border */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 group-hover:border-white/30 transition-colors duration-500" />
              </div>
              
              {/* Decorative Rotating Ring */}
              <div className="absolute -inset-8 border border-dashed border-zinc-800/50 rounded-full -z-10 animate-spin-slow" />
              <div className="absolute -inset-8 border border-zinc-800/30 rounded-full -z-10 scale-90" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1 group-hover:border-white transition-colors">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
