const articles = [
    { title: "Gunung Merbabu", url: "../HTML/artikel-gunung-merbabu.html", image: "../ASSET/gunung card/gunung merbabu.jpeg" },
    { title: "Gunung Kerinci", url: "../HTML/artikel-gunung-kerinci.html", image: "../ASSET/gunung card/Gunung-Kerinci.png" },
    { title: "Gunung Bromo", url: "../HTML/artikel-gunung-bromo.html", image: "../ASSET/gunung card/bromo.jpg" },
    { title: "Gunung Gede", url: "../HTML/artikel-gunung-gede.html", image: "../ASSET/gunung card/gede.jpg" },
    { title: "Gunung Prau", url: "../HTML/artikel-gunung-prau.html", image: "../ASSET/gunung card/prau.jpg" },
    { title: "Gunung Sindoro", url: "../HTML/artikel-gunung-sindoro.html", image: "../ASSET/gunung card/sindoro.jpg" },
    { title: "Pantai Anyer", url: "../HTML/artikel-pantai-anyer.html", image: "../ASSET/pantai card/anyer.jpg" },
    { title: "Pantai Pangandaran", url: "../HTML/artikel-pantai-pangandaran.html", image: "../ASSET/pantai card/pangandaran.jpg" },
    { title: "Pantai Pandawa", url: "../HTML/artikel-pantai-pandawa.html", image: "../ASSET/pantai card/pandawa.png" },
    { title: "Pantai Parangtritis", url: "../HTML/artikel-pantai-parangtritis.html", image: "../ASSET/pantai card/pantai-parangtritis.png" },
    { title: "Pantai Gunung Kidul", url: "../HTML/artikel-pantai-gunungkidul.html", image: "../ASSET/pantai card/gunung kidul.png" },
    { title: "Pantai Kuta", url: "../HTML/artikel-pantai-gunungkidul.html", image: "../ASSET/pantai card/kuta.jpg" }
];


const input = document.getElementById("searchInput");
const resultsContainer = document.getElementById("searchResults");
const mainContent = document.getElementById("mainContent");

input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    resultsContainer.innerHTML = "";

    if (query.length === 0) {
        resultsContainer.style.display = "none";
        mainContent.style.display = "block";
        return;
    }

    const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
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

            resultsContainer.appendChild(card);
        });
        resultsContainer.style.display = "flex";
        mainContent.style.display = "none";
    } else {
        resultsContainer.style.display = "none";
        mainContent.style.display = "block";
    }
});