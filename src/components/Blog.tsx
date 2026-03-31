import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Importance of Regular Teeth Cleaning',
    category: 'Oral Hygiene',
    image: 'https://picsum.photos/seed/blog1/600/400',
    date: 'Mar 15, 2026',
    slug: 'blog-teeth-cleaning.html',
  },
  {
    title: 'Root Canal Treatment: Myths vs Reality',
    category: 'Treatments',
    image: 'https://picsum.photos/seed/blog2/600/400',
    date: 'Mar 10, 2026',
    slug: 'blog-root-canal.html',
  },
  {
    title: 'A Guide to Modern Braces and Aligners',
    category: 'Orthodontics',
    image: 'https://picsum.photos/seed/blog3/600/400',
    date: 'Mar 05, 2026',
    slug: 'blog-braces-aligners.html',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            Our Blog
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Latest Dental Insights
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Stay updated with the latest tips and news in dental health from our experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <Link to={`/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl shadow-slate-200 transition-all duration-700 group-hover:shadow-teal-900/10 group-hover:-translate-y-2">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-teal-600 text-xs font-bold rounded-full uppercase tracking-widest shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-teal-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-sm uppercase tracking-widest group/link">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
