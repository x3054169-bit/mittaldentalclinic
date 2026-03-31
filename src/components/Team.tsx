import React from 'react';
import { motion } from 'motion/react';

const doctors = [
  {
    name: 'Dr. Antush Mittal',
    specialization: 'BDS, MDS - Endodontist & Conservative Dentist',
    image: 'https://picsum.photos/seed/doctor1/400/500',
    description: 'Expert in Root Canal Treatment and Smile Designing with 12+ years of experience.',
  },
  {
    name: 'Dr. Manali Mittal',
    specialization: 'BDS - Dental Surgeon',
    image: 'https://picsum.photos/seed/doctor2/400/500',
    description: 'Specialist in General Dentistry and Pediatric Dental Care with a gentle approach.',
  },
];

const Team = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our team of highly qualified and experienced dental professionals is dedicated to providing you with the best possible care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative mb-8">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 transition-all duration-700 group-hover:shadow-teal-900/10 group-hover:-translate-y-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white p-6 rounded-3xl shadow-xl border border-slate-50 text-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-teal-900/5 group-hover:-translate-y-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">{doctor.name}</h4>
                  <p className="text-teal-600 text-sm font-bold uppercase tracking-widest">{doctor.specialization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
