# 🚀 Deployment Guide: behura.com

## Prerequisites
- Your domain `behura.com` is registered and you have access to DNS settings
- Your GitHub repository is ready with all changes committed

## 🌟 **Option 1: Vercel (Recommended)**

### Why Vercel?
- ✅ Free hosting for personal projects
- ✅ Automatic deployments from GitHub
- ✅ Easy custom domain setup
- ✅ Built-in CDN and performance optimization
- ✅ Excellent support for React/Vite projects

### Steps:

#### 1. Deploy to Vercel
```bash
# Push your changes to GitHub first
git push origin master

# Then visit https://vercel.com/
# Sign up/in with your GitHub account
# Click "New Project" and import your ab-portfolio repository
```

#### 2. Configure Build Settings
Vercel will auto-detect your Vite project, but ensure these settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### 3. Add Environment Variables
In Vercel Dashboard → Your Project → Settings → Environment Variables:
```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

#### 4. Configure Custom Domain
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `behura.com` and `www.behura.com`
3. Vercel will provide DNS records to configure

#### 5. Update DNS Settings
In your domain registrar (where you bought behura.com):

**For the root domain (behura.com):**
- Type: A
- Name: @
- Value: 76.76.19.61

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

**Alternative (if your registrar supports ALIAS/ANAME):**
- Type: ALIAS/ANAME
- Name: @
- Value: cname.vercel-dns.com

---

## 🌟 **Option 2: Netlify**

### Steps:
1. Visit https://netlify.com and sign up with GitHub
2. Click "New site from Git" → Choose your repository
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add environment variables in Site settings → Environment variables
5. Configure custom domain in Site settings → Domain management

### DNS for Netlify:
- Type: A, Name: @, Value: 75.2.60.5
- Type: CNAME, Name: www, Value: your-site-name.netlify.app

---

## 🌟 **Option 3: GitHub Pages (Free but Limited)**

### Steps:
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist",
"predeploy": "npm run build"
```

Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/ab-portfolio/' if using GitHub Pages without custom domain
})
```

Deploy:
```bash
npm run deploy
```

Configure custom domain in GitHub repo settings → Pages → Custom domain: `behura.com`

### DNS for GitHub Pages:
- Type: A, Name: @, Value: 185.199.108.153
- Type: A, Name: @, Value: 185.199.109.153
- Type: A, Name: @, Value: 185.199.110.153
- Type: A, Name: @, Value: 185.199.111.153
- Type: CNAME, Name: www, Value: ankitab5007.github.io

---

## 📧 **EmailJS Setup (For Contact Form)**

1. Visit https://www.emailjs.com/
2. Create account and get your keys
3. Create email service (Gmail, Outlook, etc.)
4. Create email template
5. Add your keys to environment variables

---

## 🔍 **Final Checklist**

- [ ] All personal information updated
- [ ] Environment variables configured
- [ ] Custom domain DNS configured
- [ ] HTTPS certificate active (automatic with Vercel/Netlify)
- [ ] Contact form tested
- [ ] Mobile responsiveness verified
- [ ] All links working correctly

---

## 🎯 **Recommendation**

**Go with Vercel** - it's the easiest option with excellent performance and free tier that's perfect for your portfolio.

The deployment process with Vercel:
1. Push code → 2 minutes
2. Configure domain → 5 minutes  
3. DNS propagation → 5-30 minutes
4. **Total: ~15-35 minutes to live site**

Your portfolio will be live at `https://behura.com` 🚀
