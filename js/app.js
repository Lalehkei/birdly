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

const sightingForm = document.querySelector("#sighting-form");
const submittedSightingsContainer = document.querySelector("#submitted-sightings");

function renderSubmittedSightings() {
  if (!submittedSightingsContainer) return;

  const sightings = getSightingsFromStorage();

  if (sightings.length === 0) {
    submittedSightingsContainer.innerHTML = `
      <p class="no-results">No sightings submitted yet.</p>
    `;
    return;
  }

  const rows = sightings.map((sighting) => {
    return `
      <article class="submitted-row">
        <p class="submitted-bird">${sighting.birdName}</p>
        <p class="submitted-location">${sighting.location}</p>
        <p class="submitted-date">${sighting.date}</p>
      </article>
    `;
  });

  submittedSightingsContainer.innerHTML = `
    <div class="submitted-table">
      <div class="submitted-header">
        <p>Bird</p>
        <p>Location</p>
        <p>Date</p>
      </div>
      ${rows.join("")}
    </div>
  `;
}

if (sightingForm) {
  sightingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      birdName: document.querySelector("#bird-name").value,
      location: document.querySelector("#location").value,
      date: document.querySelector("#date").value,
      notes: document.querySelector("#notes").value,
    };

    const isValid = validateSightingForm(formData);

    if (!isValid) return;

    const sightings = getSightingsFromStorage();
    sightings.unshift(formData);
    saveSightingsToStorage(sightings);

    sightingForm.reset();
    clearErrors();
    renderSubmittedSightings();
  });
}

renderSubmittedSightings();

renderBirdGallery(birds);
renderFeaturedBirds(birds.slice(0, 3));
loadRecentSightings();