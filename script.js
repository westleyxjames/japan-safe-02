// Initialize homepage
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('heroGrid')) {
        renderHeroSection();
        renderLatestArticles();
        renderTrendingSection();
        renderCategoryHighlight();
        setupNewsletterForm();
    }
});

// Render Hero Section
function renderHeroSection() {
    const heroGrid = document.getElementById('heroGrid');
    const featuredArticles = articles.filter(a => a.featured);
    
    if (featuredArticles.length === 0) return;
    
    const mainArticle = featuredArticles[0];
    const sideArticles = featuredArticles.slice(1, 3);
    
    // Main featured article
    const mainHtml = `
        <a href="article-${mainArticle.id}.html" class="hero-main">
            <img src="${mainArticle.image}" alt="${mainArticle.title}" class="hero-main-image">
            <div class="hero-main-overlay">
                <span class="hero-main-category">${mainArticle.category}</span>
                <h2 class="hero-main-title">${mainArticle.title}</h2>
                <div class="hero-main-meta">
                    <span>${mainArticle.author}</span>
                    <span>${mainArticle.date}</span>
                </div>
            </div>
        </a>
    `;
    
    // Side articles
    const sideHtml = `
        <div class="hero-side">
            ${sideArticles.map(article => `
                <a href="article-${article.id}.html" class="hero-side-article">
                    <img src="${article.image}" alt="${article.title}" class="hero-side-image">
                    <div class="hero-side-content">
                        <span class="hero-side-category">${article.category}</span>
                        <h3 class="hero-side-title">${article.title}</h3>
                        <div class="hero-side-meta">
                            <span>${article.author}</span>
                            <span>${article.date}</span>
                        </div>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
    
    heroGrid.innerHTML = mainHtml + sideHtml;
}

// Render Latest Articles
function renderLatestArticles() {
    const latestArticles = document.getElementById('latestArticles');
    const articles_list = articles.filter(a => !a.featured);
    
    latestArticles.innerHTML = articles_list.map(article => `
        <a href="article-${article.id}.html" class="article-card">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <span class="article-category">${article.category}</span>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-description">${article.description}</p>
            <div class="article-meta">
                <span>${article.author}</span>
                <span>${article.date}</span>
            </div>
        </a>
    `).join('');
}

// Render Trending Section
function renderTrendingSection() {
    const trendingList = document.getElementById('trendingList');
    const trendingArticles = articles.slice(3, 8);
    
    trendingList.innerHTML = trendingArticles.map((article, index) => `
        <a href="article-${article.id}.html" class="trending-item">
            <span class="trending-number">${String(index + 1).padStart(2, '0')}</span>
            <div class="trending-content">
                <span class="trending-item-category">${article.category}</span>
                <h3 class="trending-item-title">${article.title}</h3>
                <p class="trending-item-meta">${article.author} • ${article.date}</p>
            </div>
        </a>
    `).join('');
}

// Render Category Highlight
function renderCategoryHighlight() {
    const categoryGrid = document.getElementById('categoryGrid');
    
    // Group articles by category
    const categoryGroups = {};
    articles.forEach(article => {
        if (!categoryGroups[article.category]) {
            categoryGroups[article.category] = [];
        }
        if (categoryGroups[article.category].length < 2) {
            categoryGroups[article.category].push(article);
        }
    });
    
    const displayCategories = Object.keys(categoryGroups).slice(0, 4);
    
    categoryGrid.innerHTML = displayCategories.map(category => `
        <div class="category-column">
            <h3 class="category-heading">${category}</h3>
            <div class="category-articles">
                ${categoryGroups[category].map(article => `
                    <a href="article-${article.id}.html" class="category-article">
                        <img src="${article.image}" alt="${article.title}" class="category-article-image">
                        <h4 class="category-article-title">${article.title}</h4>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Setup Newsletter Form
function setupNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`ありがとうございます！${email} で登録しました。`);
            this.reset();
        });
    }
}

// Get article by ID
function getArticleById(id) {
    return articles.find(a => a.id === parseInt(id));
}

// Get related articles
function getRelatedArticles(category, currentId) {
    return articles
        .filter(a => a.category === category && a.id !== currentId)
        .slice(0, 3);
}
