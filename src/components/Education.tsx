import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <GraduationCap className="text-zinc-400" /> Education
            </h2>
            <div className="space-y-6">
              {[
                { degree: "MCA", school: "Tumkur University", score: "9.14 CGPA" },
                { degree: "BSc Computer Science", school: "Unknown", score: "7.98 CGPA" },
                { degree: "PUC", school: "Pre-University", score: "8.34%" },
                { degree: "SSLC", school: "High School", score: "93.34%" },
              ].map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 shadow-sm hover:border-zinc-700 transition-colors"
                >
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <div className="flex justify-between text-sm text-zinc-400 mt-1">
                    <span>{edu.school}</span>
                    <span className="font-semibold text-white">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Award className="text-zinc-400" /> Certifications
            </h2>
            <div className="space-y-6">
              {[
                "Full Stack Web Development (Udemy)",
                "Python Certification",
                "Power BI Certification"
              ].map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 shadow-sm flex items-center hover:border-zinc-700 transition-colors"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="font-medium text-white">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
