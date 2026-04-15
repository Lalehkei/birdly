const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll("[data-view]");
const exploreButton = document.querySelector("#explore-btn");

function showView(viewId) {
  views.forEach((view) => {
    view.classList.add("hidden");
  });

  const activeView = document.getElementById(viewId);
  if (activeView) {
    activeView.classList.remove("hidden");
  }
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

renderBirdGallery(birds);
renderFeaturedBirds(birds.slice(0, 3));