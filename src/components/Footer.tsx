import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight">Mittal Dental Clinic</span>
                <span className="text-[10px] text-teal-400 font-medium uppercase tracking-widest">Indore</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing high-quality dental care in Indore for over 12 years. Your smile is our passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Our Services</a></li>
              <li><a href="#appointment" className="hover:text-teal-400 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span>97/1, Netaji Subhash Marg, Ramganj, Jinsi, Indore, MP 452002</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a href="tel:+919691140020" className="hover:text-teal-400">+91 96911 40020</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <a href="mailto:info@mittaldental.com" className="hover:text-teal-400">info@mittaldental.com</a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-bold mb-6">Find Us</h4>
            <div className="rounded-2xl overflow-hidden border border-slate-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7360.367805058145!2d75.8351689!3d22.721405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd9d459d267%3A0xe452036bd4179092!2sMittal%20Dental%20Clinic%2C%20Indore!5e0!3m2!1sen!2sin!4v1774961982908!5m2!1sen!2sin"
                width="100%" 
                height="150" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2026 Mittal Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-teal-400">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
