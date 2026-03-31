import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Clock, User, Phone, MessageCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Mittal Dental Clinic Indore`;
      
      // Update Meta Description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.metaDescription);

      // Update Meta Keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', `dentist in Indore, ${post.category.toLowerCase()}, ${post.title.toLowerCase()}, dental clinic Indore`);
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return <Navigate to="/blog.html" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <Link 
            to="/blog.html" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold text-sm uppercase tracking-widest mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">
              <div className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full">
                {post.category}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                Dr. Mittal
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl shadow-slate-200">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="markdown-body">
              <ReactMarkdown
                components={{
                  h3: ({ children }) => <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">{children}</h3>,
                  p: ({ children }) => <p className="text-xl text-slate-600 leading-relaxed mb-8">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-8 space-y-4 text-xl text-slate-600">{children}</ul>,
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  strong: ({ children }) => <strong className="text-slate-900 font-bold">{children}</strong>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-teal-50 rounded-[2.5rem] border border-teal-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Need expert dental care?</h3>
              <div className="flex flex-wrap gap-8">
                <a href="tel:+919691140020" className="flex items-center gap-3 text-teal-600 font-bold hover:text-teal-700 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call now</span>
                    <span className="text-lg">+91 96911 40020</span>
                  </div>
                </a>
                <a href="https://wa.me/919691140020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-600 font-bold hover:text-green-700 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">WhatsApp</span>
                    <span className="text-lg">Quick Consultation</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-slate-100">
              <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem]">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center text-white font-bold text-3xl shrink-0">
                  M
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Dr. Mittal</h4>
                  <p className="text-slate-500">Expert Dentist with 12+ years of experience. Specializing in Root Canal, Implants, and Braces.</p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
