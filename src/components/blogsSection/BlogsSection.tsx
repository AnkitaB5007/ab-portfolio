import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";
import { FiExternalLink, FiCalendar, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "../../utils/blogLoader";

const BlogsSection = () => {
  const { t } = useTranslation();

  // Get your actual blog posts
  const allBlogPosts = getAllBlogPosts();
  const featuredPosts = allBlogPosts.slice(0, 6); // Show first 6 posts

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div
      id="Blogs"
      className="min-h-screen flex flex-col justify-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("blogsSection.blogs_text")}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto">
            {t("blogsSection.blogs_description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {featuredPosts.slice(0, 4).map((post, index) => (
            <motion.article
              key={post.id}
              className="group cursor-pointer"
              variants={fadeIn("up", 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="border-b border-slate-700 pb-6 mb-6 group-hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span className="text-cyan-400 font-medium">{post.tags[0]}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-sm line-clamp-2">
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(1, 4).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <motion.div
          className="text-center mt-12"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium border-b border-transparent hover:border-cyan-400"
          >
            View All Articles
            <FiExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsSection;
