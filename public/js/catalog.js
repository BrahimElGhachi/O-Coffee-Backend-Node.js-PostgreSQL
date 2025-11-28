document.addEventListener('DOMContentLoaded', () => {
    const articlesList = document.getElementById('articles-list');
    const seeAllBtn = document.getElementById('see-all-products-button');

    if (!articlesList || !seeAllBtn) return;

    seeAllBtn.addEventListener('click', () => {
        articlesList.classList.remove('only-display-3-articles');
        seeAllBtn.style.display = 'none';
    });
});