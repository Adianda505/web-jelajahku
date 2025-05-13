import { articles } from '../JS/script-data-article';

export function renderCards(containerSelector, keyword) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ""; // kosongkan dulu kontainernya

    const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(keyword.toLowerCase())
    );

    filtered.forEach(article => {
        const card = document.createElement("div");
        card.className = "card-Pantai";
        card.style.cursor = "pointer";

        const img = document.createElement("img");
        img.src = article.image;
        card.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = article.title;
        card.appendChild(title);

        const rating = document.createElement("pre");
        rating.className = "rating-card-obj";
        rating.innerHTML = "&#11088; 4.95     &#x2665;350";
        card.appendChild(rating);

        card.addEventListener("click", () => {
            window.location.href = article.url;
        });

        container.appendChild(card);
    });
}
