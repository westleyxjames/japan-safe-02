# Deployment Guide - ミライ・インサイト (HTML/CSS/JS Version)

## ✅ Conversion Complete

Your React application has been successfully converted to static HTML, CSS, and JavaScript files!

## 📦 What's Included

### Core Files Created:
- ✅ `index.html` - Homepage with all sections
- ✅ `styles.css` - Complete stylesheet (100% CSS, no Tailwind)
- ✅ `script.js` - Homepage functionality
- ✅ `data.js` - All 12 articles data
- ✅ `article.js` - Article page functionality
- ✅ `article-template.html` - Template for generating article pages
- ✅ `generate-articles.js` - Auto-generate all 12 article pages
- ✅ `article-1.html` - Example article page (AI in Business)
- ✅ `article-2.html` - Example article page (Remote Work)

## 🚀 Quick Start

### Step 1: Generate All Article Pages

The easiest way to get all 12 article pages:

```bash
cd public
node generate-articles.js
```

This will instantly create:
```
article-1.html   # 2026年、日本企業が進めるAI活用の最前線
article-2.html   # 働き方はどう変わる？リモート時代の新しい常識
article-3.html   # スマートホームが変える日本の暮らし
article-4.html   # Z世代が生み出す新しい消費トレンド
article-5.html   # 地方創生×テクノロジー：地方都市の挑戦
article-6.html   # サステナブルな暮らしを実現する最新アイデア
article-7.html   # 日本のスタートアップが注目される理由
article-8.html   # キャリア転換期に考えるべき5つの視点
article-9.html   # 日本におけるデジタルヘルスの進化
article-10.html  # 2026年の教育トレンドとオンライン学習の未来
article-11.html  # 日本の都市生活とウェルビーイング
article-12.html  # 伝統文化とデジタルの融合が生む新しい価値
```

### Step 2: Test Locally

Open `index.html` in your browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000

# Or just double-click index.html
```

### Step 3: Deploy

Upload all files from `/public/` to your web hosting:

**Files to Upload:**
```
/public/
  ├── index.html
  ├── article-1.html through article-12.html
  ├── styles.css
  ├── script.js
  ├── article.js
  └── data.js
```

**DO NOT upload:**
- article-template.html (only needed for generation)
- generate-articles.js (only needed for generation)
- README.md (documentation only)
- DEPLOYMENT-GUIDE.md (documentation only)

## 🌐 Hosting Options

### Option 1: Netlify (Recommended)
1. Create account at netlify.com
2. Drag `/public/` folder to Netlify
3. Site is live instantly!
4. Free HTTPS and custom domain

### Option 2: Vercel
1. Create account at vercel.com
2. Import the `/public/` directory
3. Deploy with one click
4. Free hosting with custom domain

### Option 3: GitHub Pages
1. Create a repository
2. Upload all files from `/public/` to root
3. Enable GitHub Pages in settings
4. Access at username.github.io/repo-name

### Option 4: Traditional Web Hosting
Upload files via FTP/SFTP to:
- public_html/
- www/
- httpdocs/

Common hosts: Bluehost, SiteGround, HostGator, etc.

## 📊 File Size Summary

- **index.html**: ~6KB
- **styles.css**: ~15KB
- **script.js**: ~3KB
- **data.js**: ~5KB
- **article.js**: ~1KB
- **Each article-X.html**: ~8KB
- **Total**: ~150KB (all files)

**Performance:** ⚡ Lightning fast with no dependencies!

## 🎯 Features Preserved from React Version

### ✅ All Features Converted:
- [x] Sticky header with navigation
- [x] Hero section with 3 featured articles
- [x] Latest articles grid (responsive)
- [x] Trending section with numbered list
- [x] Category highlights with horizontal scroll
- [x] Newsletter signup form
- [x] Footer with links
- [x] Individual article pages
- [x] Related articles section
- [x] Author bio box
- [x] Share and bookmark buttons
- [x] Back navigation
- [x] Responsive design (mobile/tablet/desktop)
- [x] Hover effects and transitions
- [x] Japanese typography (Noto Sans JP)
- [x] Clean minimal aesthetic

## 🔧 Customization Guide

### Add a New Article:

1. **Update data.js:**
```javascript
{
  id: 13,
  title: 'Your New Article Title',
  category: 'テクノロジー',
  description: 'Article description...',
  image: 'https://images.unsplash.com/...',
  author: 'Author Name',
  date: '2026年2月25日',
  featured: false
}
```

2. **Regenerate pages:**
```bash
node generate-articles.js
```

3. **Done!** Article appears on homepage and has its own page.

### Change Colors:

Edit `styles.css`:
```css
/* Find and replace colors */
#1f2937 → your-dark-color
#f3f4f6 → your-light-gray
#6b7280 → your-medium-gray
```

### Modify Layout:

- **Homepage**: Edit `index.html`
- **Article Pages**: Edit `article-template.html` then regenerate
- **Styles**: Edit `styles.css`

### Change Fonts:

In HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

In CSS:
```css
body {
  font-family: 'YOUR-FONT', sans-serif;
}
```

## 📱 Testing Checklist

Before deploying, test:

- [ ] Homepage loads correctly
- [ ] All article links work
- [ ] Back button returns to homepage
- [ ] Images load properly
- [ ] Newsletter form submits
- [ ] Related articles appear
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1280px+)
- [ ] All Japanese characters display correctly
- [ ] Hover effects work on desktop
- [ ] Navigation works
- [ ] Footer links present

## 🐛 Troubleshooting

### Images not loading?
- Check Unsplash URLs are valid
- Ensure internet connection
- Try using local images instead

### Articles not appearing?
- Run `node generate-articles.js`
- Check data.js has correct format
- Ensure article.js is loaded

### Styles look broken?
- Verify styles.css is in same directory
- Check browser console for errors
- Clear browser cache

### Japanese text not showing?
- Ensure UTF-8 encoding: `<meta charset="UTF-8">`
- Verify Noto Sans JP font loads
- Check browser font settings

## 📈 SEO Optimization

Each page includes:
- Proper `<title>` tags
- Meta descriptions
- Semantic HTML (h1, h2, article, etc.)
- Alt text for images
- Clean URL structure

**To improve SEO further:**
1. Add meta descriptions to each article
2. Include Open Graph tags for social sharing
3. Add structured data (JSON-LD)
4. Create a sitemap.xml
5. Add robots.txt

## ⚡ Performance Tips

Your site is already fast, but you can optimize:

1. **Compress images:** Use TinyPNG or ImageOptim
2. **Minify CSS:** Use cssnano or clean-css
3. **Minify JS:** Use terser or uglify-js
4. **Enable gzip:** On your web server
5. **Add caching headers:** In .htaccess or server config
6. **Use CDN:** For images and fonts

## 📝 Maintenance

### Weekly:
- Check all links still work
- Verify images load
- Test on different browsers

### Monthly:
- Add new articles
- Update content
- Review analytics

### As Needed:
- Update styles for seasonal themes
- Add new categories
- Improve responsive design

## 🎓 Learning Resources

Want to understand the code better?

- **HTML:** developer.mozilla.org/HTML
- **CSS:** css-tricks.com
- **JavaScript:** javascript.info
- **Responsive Design:** web.dev/responsive-web-design-basics

## 💡 Next Steps

1. ✅ Generate all article pages: `node generate-articles.js`
2. ✅ Test locally in browser
3. ✅ Choose a hosting provider
4. ✅ Upload all files
5. ✅ Configure custom domain (optional)
6. ✅ Enable HTTPS
7. ✅ Share your site!

## 🎉 Success!

You now have a fully functional, static Japanese media website with:
- **Zero dependencies**
- **Fast loading times**
- **SEO friendly**
- **Mobile responsive**
- **Easy to maintain**
- **Free to host**

**Your website is production-ready!** 🚀

---

**Questions or issues?**
Refer to README.md or review the source code comments.

**Happy publishing! 📰**

© 2026 ミライ・インサイト
