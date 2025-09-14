// Blog post loader utility to read actual blog posts from the public folder

export interface BlogPostMeta {
  id: number;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  categories: string[];
  slug: string;
  readTime: string;
  content: string;
}

// Your actual blog posts metadata
export const blogPostsData: BlogPostMeta[] = [
  {
    id: 1,
    title: "Model Context Protocol: Architecture Explained",
    date: "2025-09-14",
    summary: "Breaking down the architecture of Model Context Protocol with analogies and examples.",
    tags: ["AI", "Anthropic", "JSON-RPC 2.0", "Model Context Protocol", "MCP"],
    categories: ["AI"],
    slug: "model-context-protocol-arch",
    readTime: "7 min read",
    content: ""
  },
  {
    id: 2,
    title: "Model Context Protocol: Why It Matters",
    date: "2025-09-07",
    summary: "The WHY behind Model Context Protocol and its significance in AI interactions. Understanding the standardized way for AI systems to communicate with external tools.",
    tags: ["AI", "OpenAI", "Function Calling", "Model Context Protocol"],
    categories: ["AI"],
    slug: "model-context-protocol-why",
    readTime: "6 min read",
    content: ""
  },
  {
    id: 3,
    title: "What Are Messages in LLM Chat Interfaces",
    date: "2025-07-02",
    summary: "Understanding the role of messages in LLM chat interfaces, their structure, and how they facilitate communication between users and AI models.",
    tags: ["AI", "LLM", "Chat Interfaces", "Machine Learning"],
    categories: ["AI"],
    slug: "what-are-messages-in-LLM-chat-interfaces",
    readTime: "7 min read",
    content: ""
  },
  {
    id: 4,
    title: "What is DevOps? A Beginner's Guide",
    date: "2025-06-10",
    summary: "An overview of DevOps principles, best practices, and how to implement them in your projects using Python and GitHub Actions.",
    tags: ["DevOps", "CI/CD", "Python"],
    categories: ["DevOps"],
    slug: "what-is-devops",
    readTime: "8 min read",
    content: "" // Will be loaded dynamically
  },
  {
    id: 5,
    title: "Linux Users and Groups",
    date: "2025-07-18",
    summary: "A technical reference for understanding and managing Linux user groups and file permissions, including commands, best practices, and security tips.",
    tags: ["Linux", "System Administration", "Permissions"],
    categories: ["Linux", "System Administration"],
    slug: "linux-users-and-groups",
    readTime: "12 min read",
    content: ""
  },
  {
    id: 6,
    title: "Understand OSI and TCP/IP Models",
    date: "2025-07-07",
    summary: "An overview of the OSI and TCP/IP networking models, their layers, functions, and real-world applications.",
    tags: ["OSI", "TCP/IP", "Networking", "DevOps"],
    categories: ["Networking"],
    slug: "understand-osi-tcp-models",
    readTime: "10 min read",
    content: ""
  },
  {
    id: 7,
    title: "Ports and Protocols in Networking",
    date: "2025-07-08",
    summary: "Comprehensive guide to network ports, protocols, and how they work together to enable communication in distributed systems.",
    tags: ["Networking", "Protocols", "Infrastructure"],
    categories: ["Networking"],
    slug: "ports-and-protocols",
    readTime: "9 min read",
    content: ""
  },
  {
    id: 8,
    title: "Debug Docker Basics",
    date: "2025-07-01",
    summary: "Essential Docker debugging techniques, common issues, and troubleshooting strategies for containerized applications.",
    tags: ["Docker", "DevOps", "Containers"],
    categories: ["DevOps"],
    slug: "debug-docker-basics",
    readTime: "6 min read",
    content: ""
  },
  {
    id: 9,
    title: "OSI Model Deep Dive",
    date: "2025-06-25",
    summary: "Detailed exploration of the OSI networking model and its seven layers.",
    tags: ["Networking", "OSI", "Protocols"],
    categories: ["Networking"],
    slug: "osi-model",
    readTime: "8 min read",
    content: ""
  },
  {
    id: 10,
    title: "TCP/IP Model Explained",
    date: "2025-06-20",
    summary: "Understanding the TCP/IP networking model and how it compares to OSI.",
    tags: ["Networking", "TCP/IP", "Internet"],
    categories: ["Networking"],
    slug: "tcp-ip-model",
    readTime: "7 min read",
    content: ""
  },
  {
    id: 11,
    title: "User and Group Management: A Case Study",
    date: "2025-06-15",
    summary: "Practical case study on Linux user and group management in enterprise environments.",
    tags: ["Linux", "Administration", "Security"],
    categories: ["System Administration"],
    slug: "user-and-group-management-a-case-study",
    readTime: "10 min read",
    content: ""
  },
  {
    id: 12,
    title: "Understanding OSI vs TCP/IP",
    date: "2025-06-12",
    summary: "Comparative analysis of OSI and TCP/IP networking models.",
    tags: ["Networking", "OSI", "TCP/IP"],
    categories: ["Networking"],
    slug: "understand-osi-tcp",
    readTime: "9 min read",
    content: ""
  }
];

// Function to load blog post content from markdown file
export const loadBlogPostContent = async (slug: string): Promise<string> => {
  try {
    const response = await fetch(`/blog-posts/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load blog post: ${slug}`);
    }
    const content = await response.text();
    
    // Remove frontmatter (content between --- and ---)
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
    return contentWithoutFrontmatter;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return `# Error Loading Post\n\nSorry, we couldn't load the blog post "${slug}". Please try again later.`;
  }
};

// Get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPostMeta | undefined => {
  return blogPostsData.find(post => post.slug === slug);
};

// Get all blog posts
export const getAllBlogPosts = (): BlogPostMeta[] => {
  return blogPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
