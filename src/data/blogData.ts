// Blog post interface
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  slug: string;
  image: string;
  featured: boolean;
}

// Blog data - easily maintainable
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Model Context Protocol: Architecture Explained",
    excerpt: "A deep dive into the architecture of Model Context Protocol, exploring its components and how they interact.",
    date: "2025-09-14",
    readTime: "8 min read",
    tags: ["AI", "Anthropic", "JSON-RPC 2.0", "Model Context Protocol", "MCP"],
    category: "AI",
    slug: "model-context-protocol-architecture",
    image: "/blog-images/mcp-drawio-1.png",
    featured: false
  },
  {
    id: 2,
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
    id: 3,
    title: "What is DevOps? A Beginner's Guide",
    excerpt: "An overview of DevOps principles, best practices, and how to implement them in your projects using Python and GitHub Actions.",
    date: "2025-06-10",
    readTime: "8 min read",
    tags: ["DevOps", "CI/CD", "Python"],
    category: "DevOps",
    slug: "what-is-devops",
    image: "/blog-images/devops-cover.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Linux Users and Groups Management",
    excerpt: "A technical reference for understanding and managing Linux user groups and file permissions, including commands, best practices, and security tips.",
    date: "2025-07-18",
    readTime: "12 min read",
    tags: ["Linux", "System Administration", "Security"],
    category: "System Administration",
    slug: "linux-users-and-groups",
    image: "/blog-images/linux-users.jpg",
    featured: true
  },
  {
    id: 5,
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
    id: 6,
    title: "Ports and Protocols in Networking",
    excerpt: "Comprehensive guide to network ports, protocols, and how they work together to enable communication in distributed systems.",
    date: "2025-07-08",
    readTime: "9 min read",
    tags: ["Networking", "Protocols", "Infrastructure"],
    category: "Networking",
    slug: "ports-and-protocols",
    image: "/blog-images/ports-protocols.jpg",
    featured: false
  },
  {
    id: 7,
    title: "Understanding Messages in LLM Chat Interfaces",
    excerpt: "Explore how Large Language Models process and respond to messages in chat interfaces, including prompt engineering and conversation context.",
    date: "2025-07-02",
    readTime: "7 min read",
    tags: ["AI", "LLM", "Machine Learning"],
    category: "Artificial Intelligence",
    slug: "what-are-messages-in-llm-chat-interfaces",
    image: "/blog-images/llm-chat.jpg",
    featured: true
  },
  {
    id: 7,
    title: "Debug Docker Basics",
    excerpt: "Essential Docker debugging techniques, common issues, and troubleshooting strategies for containerized applications.",
    date: "2025-07-01",
    readTime: "6 min read",
    tags: ["Docker", "DevOps", "Containers"],
    category: "DevOps",
    slug: "debug-docker-basics",
    image: "/blog-images/docker-debug.jpg",
    featured: false
  }
];

// Helper functions
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category: string) => blogPosts.filter(post => post.category === category);
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
export const getLatestPosts = (count: number = 6) => blogPosts.slice(0, count);

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
