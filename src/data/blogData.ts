  // Blog post interface (without manual ID)
export interface BlogPostData {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  slug: string;
  image?: string; // Optional - will show category icon if not provided
  featured: boolean;
}

// Blog post interface with auto-generated ID
export interface BlogPost extends BlogPostData {
  id: number;
}

// Blog data - just add new posts at the top, IDs auto-generated!
const blogPostsData: BlogPostData[] = [
  {
    title: "LangChain: An Overview of Its Core Components",
    excerpt: "At its foundation, LangChain is built around six major components: Models, Prompts, Chains, Memory, Indexes, and Agents.",
    date: "2025-09-18",
    readTime: "7 min read",
    tags: ["AI", "LangChain", "LLM"],
    category: "Artificial Intelligence",
    slug: "langchain-an-overview",
    image: "/blog-images/langchain-overview.png",
    featured: true
  },
  {
    title: "Model Context Protocol: Architecture Explained",
    excerpt: "Breaking down the architecture of Model Context Protocol with analogies and examples.",
    date: "2025-09-14",
    readTime: "7 min read",
    tags: ["AI", "Anthropic", "JSON-RPC 2.0", "Model Context Protocol", "MCP"],
    category: "Artificial Intelligence",
    slug: "model-context-protocol-arch",
    image: "/blog-images/mcp.drawio-1.png",
    featured: true
  },
  {
    title: "Model Context Protocol: Why It Matters",
    excerpt: "The WHY behind Model Context Protocol and its significance in AI interactions. Understanding the standardized way for AI systems to communicate with external tools.",
    date: "2025-09-07",
    readTime: "6 min read",
    tags: ["AI", "OpenAI", "Function Calling", "Model Context Protocol"],
    category: "Artificial Intelligence",
    slug: "model-context-protocol-why",
    image: "/blog-images/mcp-cover.webp",
    featured: true
  },
  {
    title: "What Are Messages in LLM Chat Interfaces",
    excerpt: "Understanding the role of messages in LLM chat interfaces, their structure, and how they facilitate communication between users and AI models.",
    date: "2025-07-02",
    readTime: "7 min read",
    tags: ["AI", "LLM", "Chat Interfaces", "Machine Learning"],
    category: "Artificial Intelligence",
    slug: "what-are-messages-in-LLM-chat-interfaces",
    featured: true
  },
  {
    title: "What is DevOps? A Beginner's Guide",
    excerpt: "An overview of DevOps principles, best practices, and how to implement them in your projects using Python and GitHub Actions.",
    date: "2025-06-10",
    readTime: "8 min read",
    tags: ["DevOps", "CI/CD", "Python"],
    category: "DevOps",
    slug: "what-is-devops",
    image: "/blog-images/devops.png",
    featured: false
  },
  {
    title: "Linux Users and Groups Management",
    excerpt: "A technical reference for understanding and managing Linux user groups and file permissions, including commands, best practices, and security tips.",
    date: "2025-07-18",
    readTime: "12 min read",
    tags: ["Linux", "System Administration", "Security"],
    category: "System Administration",
    slug: "linux-users-and-groups",
    featured: false
  },
  {
    title: "Understanding OSI and TCP/IP Models",
    excerpt: "Deep dive into networking fundamentals - comparing OSI and TCP/IP models, their layers, and how data flows through network protocols.",
    date: "2025-07-08",
    readTime: "10 min read",
    tags: ["Networking", "OSI", "TCP/IP"],
    category: "Networking",
    slug: "understand-osi-tcp-models",
    image: "/blog-images/osi-vs-tcp.jpg",
    featured: false
  },
  {
    title: "Ports and Protocols in Networking",
    excerpt: "Comprehensive guide to network ports, protocols, and how they work together to enable communication in distributed systems.",
    date: "2025-07-08",
    readTime: "9 min read",
    tags: ["Networking", "Protocols", "Infrastructure"],
    category: "Networking",
    slug: "ports-and-protocols",
    featured: false
  },
  {
    title: "Debug Docker Basics",
    excerpt: "Essential Docker debugging techniques, common issues, and troubleshooting strategies for containerized applications.",
    date: "2025-07-01",
    readTime: "6 min read",
    tags: ["Docker", "DevOps", "Containers"],
    category: "DevOps",
    slug: "debug-docker-basics",
    featured: false
  }
];

// Auto-generate IDs based on array position (1-indexed)
export const blogPosts: BlogPost[] = blogPostsData.map((post, index) => ({
  ...post,
  id: index + 1
}));

// Helper functions
export const getFeaturedPosts = (): BlogPost[] => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category: string): BlogPost[] => blogPosts.filter(post => post.category === category);
export const getPostBySlug = (slug: string): BlogPost | undefined => blogPosts.find(post => post.slug === slug);
export const getLatestPosts = (count: number = 6): BlogPost[] => blogPosts.slice(0, count);

// Blog configuration
export const blogConfig = {
  baseUrl: "https://blog.behura.com", // Your blog domain
  author: "Ankita Behura",
  title: "Ankita's Tech Blog",
  description: "Technical insights on DevOps, AI, System Administration, and Modern Development",
  categories: ["DevOps", "System Administration", "Networking", "Artificial Intelligence", "Web Development"],
  social: {
    github: "https://github.com/AnkitaB5007",
    linkedin: "https://www.linkedin.com/in/ankita-behura-ba6579192/"
  }
};
