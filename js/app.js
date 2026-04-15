const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll("[data-view]");
const exploreButton = document.querySelector("#explore-btn");
const searchInput = document.querySelector("#search-input");

function showView(viewId) {
  views.forEach((view) => {
    view.classList.add("hidden");
  });

  const activeView = document.getElementById(viewId);
  if (activeView) {
    activeView.classList.remove("hidden");
  }
}

function filterBirds(searchTerm) {
  const normalizedTerm = searchTerm.trim().toLowerCase();

  const filteredBirds = birds.filter((bird) => {
    return (
      bird.name.toLowerCase().includes(normalizedTerm) ||
      bird.category.toLowerCase().includes(normalizedTerm)
    );
  });

  renderBirdGallery(filteredBirds);
}

navLinks.forEach((link) => {
    
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.dir(link);
    const viewId = link.dataset.view;
    showView(viewId);
  });
});

if (exploreButton) {
  exploreButton.addEventListener("click", () => {
    showView("explore-view");
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    filterBirds(event.target.value);
  });
}

renderBirdGallery(birds);
renderFeaturedBirds(birds.slice(0, 3));