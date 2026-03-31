import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const Speciality = () => {
  const points = [
    'Painless treatment using modern technology',
    'Highly hygienic and sterilized environment',
    'Experienced and compassionate doctors',
    'Patient-first approach with clear explanations',
    'Advanced diagnostic tools for accurate care',
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Smile Transformations with <span className="text-teal-600">Expert Care</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              At Mittal Dental Clinic, we believe that every patient deserves a healthy, beautiful smile. Our clinic is equipped with the latest dental technology to provide you with the most effective and comfortable treatments.
            </p>

            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 shrink-0 bg-teal-50 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-500">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 inline-flex items-center gap-6 shadow-sm">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-900/20">
                <span className="text-2xl font-bold">5.0</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Google Rating</p>
                <p className="text-sm text-teal-700 font-bold uppercase tracking-widest opacity-70">128+ Verified Reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
              <img
                src="https://picsum.photos/seed/clinic-interior/800/1000"
                alt="Clinic Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50 z-20 hidden lg:block max-w-[200px]">
              <p className="text-5xl font-bold text-teal-600 mb-2 tracking-tighter">12+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Years of Trusted Excellence</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-50 rounded-full -z-10 blur-3xl" />
            <div className="absolute top-1/2 -right-20 w-64 h-64 bg-sky-50 rounded-full -z-10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
