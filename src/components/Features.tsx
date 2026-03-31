import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Zap, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Trusted by Thousands',
      description: 'Over 2000 successful treatments and happy smiles.',
      icon: Award,
    },
    {
      title: 'Award Winning Service',
      description: 'Recognized for excellence in dental care and patient safety.',
      icon: Shield,
    },
    {
      title: 'Advanced Technology',
      description: 'Using the latest digital tools for precise and painless care.',
      icon: Zap,
    },
    {
      title: 'Patient-First Care',
      description: 'Your comfort and health are our top priorities.',
      icon: Heart,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            Our Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Why We Are Different
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We combine clinical excellence with a patient-centered approach to ensure you get the best dental experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 transition-colors duration-500">
                <f.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
