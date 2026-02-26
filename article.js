// Article page script
document.addEventListener('DOMContentLoaded', function() {
    // Get article ID from filename
    const filename = window.location.pathname.split('/').pop();
    const articleId = parseInt(filename.match(/article-(\d+)\.html/)?.[1]);
    
    if (articleId) {
        const article = getArticleById(articleId);
        if (article) {
            renderRelatedArticles(article.category, article.id);
        }
    }
});

function renderRelatedArticles(category, currentId) {
    const relatedContainer = document.getElementById('relatedArticles');
    if (!relatedContainer) return;
    
    const relatedArticles = getRelatedArticles(category, currentId);
    
    if (relatedArticles.length === 0) {
        relatedContainer.style.display = 'none';
        return;
    }
    
    relatedContainer.innerHTML = `
        <h2>関連記事</h2>
        <div class="related-grid">
            ${relatedArticles.map(article => `
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
            `).join('')}
        </div>
    `;
}
