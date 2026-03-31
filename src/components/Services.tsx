import React from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Smile, 
  Activity, 
  HeartPulse 
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Root Canal Treatment',
    description: 'Painless RCT using advanced rotary technology for maximum comfort.',
    icon: HeartPulse,
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing to keep your smile bright and healthy.',
    icon: Sparkles,
    color: 'bg-sky-50 text-sky-600',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent and natural-looking tooth replacements with high success rates.',
    icon: Stethoscope,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with traditional braces or invisible clear aligners.',
    icon: Activity,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Wisdom Tooth Removal',
    description: 'Safe and gentle extractions for impacted or problematic wisdom teeth.',
    icon: ShieldCheck,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with veneers, whitening, and smile design.',
    icon: Smile,
    color: 'bg-amber-50 text-amber-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Your Personalized Dental Care
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Comprehensive dental care tailored to keep your smile healthy and bright. We use the latest techniques and equipment for your comfort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 border border-slate-100 hover:-translate-y-3"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-10 h-1 bg-slate-100 group-hover:w-20 group-hover:bg-teal-500 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
