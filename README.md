# ミライ・インサイト - HTML/CSS/JS版

Complete static HTML, CSS, and JavaScript conversion of the Japanese media website.

## 📁 File Structure

```
/public/
├── index.html              # Homepage
├── article-1.html          # Article page (AI in Business)
├── article-2.html          # Article page (Remote Work)
├── article-3.html through article-12.html (to be generated)
├── styles.css              # All CSS styles
├── script.js               # Homepage JavaScript
├── article.js              # Article page JavaScript
├── data.js                 # Article data
├── article-template.html   # Template for article pages
└── generate-articles.js    # Node script to generate all article pages
```

## 🚀 How to Use

### Option 1: Open Directly
Simply open `index.html` in your web browser to view the homepage. Click on any article to navigate to its dedicated page.

### Option 2: Use a Local Server
For best results, serve the files using a local web server:

```bash
# Using Python 3
cd public
python -m http.server 8000

# Using Node.js (http-server)
cd public
npx http-server -p 8000

# Using PHP
cd public
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📝 Generating All Article Pages

To generate all 12 article HTML files from the template:

```bash
cd public
node generate-articles.js
```

This will create:
- article-1.html through article-12.html
- Each with unique content based on the articles data

## 📄 Pages Included

### Homepage (index.html)
- **Hero Section**: 3 featured articles with large images
- **Latest Articles Grid**: All non-featured articles
- **Trending Section**: Top 5 trending articles
- **Category Highlights**: Horizontal scrolling categories
- **Newsletter Signup**: Email subscription form
- **Footer**: Site navigation and links

### Article Pages (article-[1-12].html)
Each article page includes:
- Back button to homepage
- Article header with category, title, author, and date
- Share and bookmark buttons
- Featured image
- Full article content with sections
- Author bio box
- Related articles (same category)

## 🎨 Design Features

- **Typography**: Noto Sans JP for proper Japanese rendering
- **Color Scheme**: White, light gray, navy, muted blue
- **Layout**: Minimal Japanese aesthetic with clean spacing
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Sticky Header**: Header stays visible while scrolling
- **Hover Effects**: Smooth transitions on images and links

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Technical Details

### HTML
- Semantic HTML5 markup
- Proper heading hierarchy
- ARIA labels for accessibility
- Meta tags for SEO

### CSS
- Pure CSS (no preprocessors)
- Mobile-first approach
- Flexbox and Grid layouts
- CSS transitions and transforms
- No external CSS frameworks

### JavaScript
- Vanilla JavaScript (no libraries)
- Dynamic content rendering
- Related articles logic
- Form handling
- DOM manipulation

## 📋 Articles List

1. **テクノロジー**: 2026年、日本企業が進めるAI活用の最前線
2. **キャリア**: 働き方はどう変わる？リモート時代の新しい常識
3. **ライフスタイル**: スマートホームが変える日本の暮らし
4. **文化**: Z世代が生み出す新しい消費トレンド
5. **ビジネス**: 地方創生×テクノロジー：地方都市の挑戦
6. **サステナビリティ**: サステナブルな暮らしを実現する最新アイデア
7. **ビジネス**: 日本のスタートアップが注目される理由
8. **キャリア**: キャリア転換期に考えるべき5つの視点
9. **テクノロジー**: 日本におけるデジタルヘルスの進化
10. **教育**: 2026年の教育トレンドとオンライン学習の未来
11. **ライフスタイル**: 日本の都市生活とウェルビーイング
12. **文化**: 伝統文化とデジタルの融合が生む新しい価値

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 No Dependencies

This project uses:
- ✅ Pure HTML5
- ✅ Pure CSS3
- ✅ Vanilla JavaScript
- ✅ No build tools required
- ✅ No package managers needed
- ✅ Google Fonts (Noto Sans JP)
- ✅ Unsplash images

## 🎯 Key Features

1. **Clean Architecture**: Separation of concerns (HTML/CSS/JS)
2. **Reusable Components**: Template-based article pages
3. **Dynamic Content**: JavaScript renders articles from data
4. **SEO Friendly**: Proper meta tags and semantic markup
5. **Accessible**: ARIA labels and keyboard navigation
6. **Performance**: Optimized images and minimal code

## 🔄 Making Updates

### To add a new article:
1. Add article data to `data.js`
2. Run `node generate-articles.js` to create the HTML page
3. Article will automatically appear on homepage

### To modify styles:
Edit `styles.css` - changes apply to all pages

### To change layout:
Edit `article-template.html` then regenerate article pages

## 📞 Support

For issues or questions, refer to the original React codebase or contact the development team.

## 📜 License

© 2026 ミライ・インサイト. All rights reserved.
