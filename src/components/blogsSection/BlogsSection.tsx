import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";
import { FiExternalLink, FiCalendar, FiClock } from "react-icons/fi";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
  image: string;
}

const BlogsSection = () => {
  const { t } = useTranslation();

  // Your actual blog posts from personal-blog repository
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "What is DevOps? A Beginner's Guide",
      excerpt: "An overview of DevOps principles, best practices, and how to implement them in your projects using Python and GitHub Actions.",
      date: "2025-06-10",
      readTime: "8 min read",
      tags: ["DevOps", "CI/CD", "Python"],
      link: "https://behura.com/posts/what-is-devops", // Update with your actual blog URL
      image: "/blog-images/devops-cover.jpg"
    },
    {
      id: 2,
      title: "Linux Users and Groups Management",
      excerpt: "A technical reference for understanding and managing Linux user groups and file permissions, including commands, best practices, and security tips.",
      date: "2025-07-18",
      readTime: "12 min read",
      tags: ["Linux", "System Administration", "Security"],
      link: "https://behura.com/posts/linux-users-and-groups",
      image: "/blog-images/linux-users.jpg"
    },
    {
      id: 3,
      title: "Understanding OSI and TCP/IP Models",
      excerpt: "Deep dive into networking fundamentals - comparing OSI and TCP/IP models, their layers, and how data flows through network protocols.",
      date: "2025-07-08",
      readTime: "10 min read",
      tags: ["Networking", "OSI", "TCP/IP"],
      link: "https://behura.com/posts/understand-osi-tcp-models",
      image: "/blog-images/osi-vs-tcp.jpg"
    },
    {
      id: 4,
      title: "Ports and Protocols in Networking",
      excerpt: "Comprehensive guide to network ports, protocols, and how they work together to enable communication in distributed systems.",
      date: "2025-07-08",
      readTime: "9 min read",
      tags: ["Networking", "Protocols", "Infrastructure"],
      link: "https://behura.com/posts/ports-and-protocols",
      image: "/blog-images/ports-protocols.jpg"
    },
    {
      id: 5,
      title: "Understanding Messages in LLM Chat Interfaces",
      excerpt: "Explore how Large Language Models process and respond to messages in chat interfaces, including prompt engineering and conversation context.",
      date: "2025-07-02",
      readTime: "7 min read",
      tags: ["AI", "LLM", "Machine Learning"],
      link: "https://behura.com/posts/what-are-messages-in-llm-chat-interfaces",
      image: "/blog-images/llm-chat.jpg"
    },
    {
      id: 6,
      title: "Debug Docker Basics",
      excerpt: "Essential Docker debugging techniques, common issues, and troubleshooting strategies for containerized applications.",
      date: "2025-07-01",
      readTime: "6 min read",
      tags: ["Docker", "DevOps", "Containers"],
      link: "https://behura.com/posts/debug-docker-basics",
      image: "/blog-images/docker-debug.jpg"
    }
  ];

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
      className="max-w-[1200px] mx-auto mt-[100px] px-4"
    >
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-6xl text-cyan mb-4 text-center">
          {t("blogsSection.blogs_text")}
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          {t("blogsSection.blogs_description")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-cyan/50 transition-all duration-300 group"
            variants={fadeIn("up", 0.2 * (index + 1))}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Blog Image */}
            <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-cyan/20 text-cyan text-xs px-3 py-1 rounded-full">
                  {post.tags[0]}
                </span>
              </div>
              {/* Placeholder for blog image */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                <div className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-slate-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(1).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan hover:text-white transition-colors duration-300 font-semibold"
              >
                Read More
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All Blogs Button */}
      <motion.div
        className="text-center mt-12"
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <a
          href="https://behura.com/blog" // Update this to your actual blog URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
        >
          View All Blogs
          <FiExternalLink className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
};

export default BlogsSection;
