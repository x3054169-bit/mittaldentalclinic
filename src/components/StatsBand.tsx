import React from 'react';

const StatsBand = () => {
  const stats = [
    { label: 'A+ Standards', value: 'Quality' },
    { label: 'Successful Treatments', value: '2000+' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Verified Reviews', value: '128+' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-teal-900/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-teal-50 text-sm font-bold uppercase tracking-widest opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
