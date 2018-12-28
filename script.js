window.addEventListener("load", showPage);

function showPage() {
    console.log('showPage');
    document.querySelector('.portfolio_item').addEventListener('click', showPortfolioPage);
    document.querySelector('.portfolio_overlay').addEventListener('click', hidePortfolioPage);
}

function showPortfolioPage() {
    document.querySelector('.portfolio_pages').classList.remove('hidden');
    document.querySelector('.portfolio_pages').classList.remove('hidden');
    document.querySelector('html').classList.add('hide_overflow');
}

function hidePortfolioPage() {
    document.querySelector('.portfolio_pages').classList.add('hidden');
    document.querySelector('html').classList.remove('hide_overflow');
}
