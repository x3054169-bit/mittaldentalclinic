import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Rahul Sharma',
    text: 'Painless treatment and very clean clinic. Dr. Mittal explained everything clearly before starting the procedure.',
    rating: 5,
    role: 'Patient',
  },
  {
    name: 'Priya Verma',
    text: 'Best dental clinic in Indore. The staff is very professional and the environment is very welcoming.',
    rating: 5,
    role: 'Patient',
  },
  {
    name: 'Amit Jain',
    text: 'Got my dental implants done here. Excellent results and very reasonable pricing. Highly recommended!',
    rating: 5,
    role: 'Patient',
  },
  {
    name: 'Sneha Gupta',
    text: 'Very gentle with kids. My daughter was not afraid at all. Thank you Dr. Manali for the care.',
    rating: 5,
    role: 'Parent',
  },
  {
    name: 'Vikram Singh',
    text: 'Advanced technology and hygienic clinic. The root canal treatment was completely painless.',
    rating: 5,
    role: 'Patient',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Patient Share Their Stories
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20 !overflow-visible"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <motion.div 
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 h-full flex flex-col relative group transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src={`https://picsum.photos/seed/patient-${i}/100/100`} 
                      alt={t.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                  <div className="ml-auto">
                    <Quote className="w-8 h-8 text-teal-50 group-hover:text-teal-100 transition-colors duration-500" />
                  </div>
                </div>

                <p className="text-slate-500 leading-relaxed mb-8 flex-grow italic">
                  "{t.text}"
                </p>

                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
