const birdGallery = document.querySelector("#bird-gallery");
const featuredBirdsSection = document.querySelector("#featured-birds");

function createBirdCardMarkup(bird, isFeatured = false) {
  const imageClass = isFeatured ? "featured-card-image" : "bird-card-image";
  const contentClass = isFeatured ? "featured-card-content" : "bird-card-content";
  const articleClass = isFeatured ? "featured-card" : "bird-card";

  return `
    <article class="${articleClass}">
      <img src="${bird.image}" alt="${bird.name}" class="${imageClass}" />
      <div class="${contentClass}">
        <header>
          <span class="bird-badge">${bird.category}</span>
          <h3>${bird.name}</h3>
        </header>
        <p class="bird-region">${bird.region}</p>
        <p>${bird.description}</p>
      </div>
    </article>
  `;
}

function renderBirdGallery(birdList) {
  if (!birdGallery) return;

  if (birdList.length === 0) {
    birdGallery.innerHTML = `
      <p class="no-results">No birds found. Try another search term.</p>
    `;
    return;
  }

  const cards = birdList.map((bird) => createBirdCardMarkup(bird));
  birdGallery.innerHTML = cards.join("");
}

function renderFeaturedBirds(birdList) {
  if (!featuredBirdsSection) return;

  const cards = birdList.map((bird) =>
    createBirdCardMarkup(bird, true)
  );
  featuredBirdsSection.innerHTML = cards.join("");
}