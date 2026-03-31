import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AppointmentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-50">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16 lg:p-20 bg-teal-600 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  Contact Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                  Ready to Transform Your Smile?
                </h2>
                <p className="text-teal-50 text-lg mb-12 opacity-90 leading-relaxed">
                  Book your appointment today and take the first step towards a healthier, more beautiful smile.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-teal-100 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-xl font-bold">+91 96911 40020</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-teal-100 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="text-lg font-bold leading-tight">97/1, Netaji Subhash Marg, Indore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-16 lg:p-20">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Appointment Requested!</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                      Thank you for reaching out. Our team will contact you shortly to confirm your preferred time.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-teal-600 font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 00000 00000"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Service Needed</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none">
                        <option>General Consultation</option>
                        <option>Root Canal Treatment</option>
                        <option>Dental Implants</option>
                        <option>Braces & Aligners</option>
                        <option>Teeth Whitening</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your concern..."
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-teal-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-teal-900/10 hover:bg-teal-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
                    >
                      Confirm Appointment
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
