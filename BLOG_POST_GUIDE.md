# 📝 Blog Post Creation Guide

## Overview
Your portfolio has a fully integrated blog system that uses markdown files with frontmatter. This guide will walk you through adding new blog posts step by step.

## 📁 File Structure
```
public/
├── blog-posts/           # Your markdown blog posts go here
│   ├── post-1.md
│   ├── post-2.md
│   └── ...
├── blog-images/          # Blog post images go here
│   ├── image1.jpg
│   ├── image2.png
│   └── ...
src/
└── utils/
    └── blogLoader.ts     # Blog metadata and loading logic
```

## 🚀 Step-by-Step Guide

### Step 1: Create Your Markdown File
1. Navigate to `public/blog-posts/`
2. Create a new `.md` file with a descriptive filename
   - Use lowercase letters and hyphens
   - Example: `implementing-ci-cd-pipeline.md`

### Step 2: Add Frontmatter
Start your markdown file with frontmatter (metadata between `---`):

```markdown
---
title: "Your Blog Post Title"
date: "2025-01-15"
tags: ["DevOps", "CI/CD", "Docker", "Automation"]
categories: ["DevOps"]
summary: "A brief summary of what this post covers. Keep it under 150 characters for best display."
readTime: "8 min read"
---

# Your Blog Post Title

Your content starts here...
```

### Step 3: Add Images (if needed)
1. Put all images in `public/blog-images/`
2. Reference them in your markdown using:
   ```markdown
   ![Alt text](/blog-images/your-image.jpg)
   ```

### Step 4: Update blogLoader.ts
Add your new post to the metadata array in `src/utils/blogLoader.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  // ...existing posts...
  {
    id: 11, // increment the ID
    title: "Your Blog Post Title",
    slug: "your-blog-post-filename", // without .md extension
    date: "2025-01-15",
    summary: "Your post summary here",
    tags: ["DevOps", "CI/CD", "Docker", "Automation"],
    categories: ["DevOps"],
    readTime: "8 min read"
  }
];
```

### Step 5: Test Locally
```bash
# Build the project
npm run build

# Start development server
npm run dev

# Visit your blog at:
# http://localhost:5173/blogs
# http://localhost:5173/blog/your-post-slug
```

### Step 6: Deploy
```bash
# Add changes to git
git add .

# Commit with descriptive message
git commit -m "Add new blog post: Your Post Title"

# Push to GitHub (auto-deploys to Vercel)
git push origin master
```

## 📝 Markdown Features Supported

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Code Blocks with Syntax Highlighting
```markdown
```javascript
function example() {
  console.log("Hello World!");
}
```
```

### Images
```markdown
![Description](/blog-images/image-name.jpg)
```

### Links
```markdown
[Link text](https://example.com)
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

## 🎨 Styling Guidelines

### Categories
Use these predefined categories for consistent styling:
- `"DevOps"` - Shows ⚙️ icon
- `"AI"` or `"Machine Learning"` - Shows 🤖 icon
- `"Networking"` - Shows 🌐 icon
- `"Linux"` or `"System Administration"` - Shows 🐧 icon
- Other categories show 📝 icon

### Tags
Keep tags relevant and consistent:
- Use existing tags when possible
- Capitalize properly (e.g., "DevOps", "CI/CD", "Docker")
- Limit to 3-5 tags per post

### Read Time
Estimate based on:
- ~200 words per minute reading speed
- Account for code examples and images
- Common formats: "5 min read", "10 min read"

## 🔧 Troubleshooting

### Post Not Appearing?
1. Check filename matches slug in `blogLoader.ts`
2. Ensure frontmatter format is correct
3. Verify file is in `public/blog-posts/`
4. Check browser console for errors

### Images Not Loading?
1. Verify images are in `public/blog-images/`
2. Check image paths start with `/blog-images/`
3. Ensure image file extensions match exactly

### Build Errors?
1. Check frontmatter syntax (proper YAML format)
2. Ensure all required fields are present
3. Verify no syntax errors in `blogLoader.ts`

## 📋 Pre-Deployment Checklist

- [ ] Markdown file created in `public/blog-posts/`
- [ ] Frontmatter includes all required fields
- [ ] Images added to `public/blog-images/` (if any)
- [ ] Image paths use `/blog-images/` prefix
- [ ] Blog metadata added to `blogLoader.ts`
- [ ] Local testing completed successfully
- [ ] Build runs without errors
- [ ] Blog post accessible at correct URL
- [ ] Committed and pushed to GitHub

## 🌐 Live URLs
After deployment, your blog will be available at:
- Blog list: `https://behura.com/blogs`
- Individual posts: `https://behura.com/blog/your-post-slug`

## 📞 Need Help?
If you encounter issues:
1. Check the browser console for errors
2. Verify all files are in correct locations
3. Ensure proper markdown syntax
4. Test locally before deploying

Happy blogging! 🎉
