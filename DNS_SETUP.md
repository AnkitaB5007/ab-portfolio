# 🌐 DNS Configuration for behura.com

## DNS Records to Add (in your domain registrar)

### A Record (for root domain):
```
Type: A
Name: @ (or leave blank)
Value: 76.76.19.61
TTL: 3600 (or Auto)
```

### CNAME Record (for www):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

## Where to Add These Records:

### If you bought behura.com from:
- **GoDaddy**: Go to Domain Manager → DNS Management
- **Namecheap**: Go to Domain List → Manage → Advanced DNS
- **Cloudflare**: Go to DNS → Records
- **Google Domains**: Go to DNS settings

## Verification Steps:

1. **Add DNS records** as shown above
2. **Wait 5-24 hours** for DNS propagation
3. **Check status** in Vercel dashboard
4. **Your site will be live** at https://behura.com

## Quick Test Commands:
```bash
# Check if DNS is propagating
nslookup behura.com

# Check if site is live
curl -I https://behura.com
```

## What Your Site Will Have:
- ✅ **https://behura.com** → Your portfolio
- ✅ **https://behura.com/#Blogs** → Blog section
- ✅ **SSL Certificate** (automatic)
- ✅ **Global CDN** (fast loading worldwide)
- ✅ **Automatic deployments** from GitHub

Your portfolio with integrated blog is ready to go live! 🚀
