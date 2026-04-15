const sightingsContainer = document.querySelector("#recent-sightings");

function renderSightings(sightings) {
  if (!sightingsContainer) return;

  if (!sightings.length) {
    sightingsContainer.innerHTML = `
      <p class="no-results">No recent sightings available right now.</p>
    `;
    return;
  }

  const items = sightings.map((sighting) => {
    return `
      <article class="sighting-item">
        <h3>${sighting.comName}</h3>
        <p><strong>Location:</strong> ${sighting.locName}</p>
        <p><strong>Date:</strong> ${sighting.obsDt}</p>
      </article>
    `;
  });

  sightingsContainer.innerHTML = items.join("");
}

async function loadRecentSightings() {
  if (!sightingsContainer) return;

  sightingsContainer.innerHTML = `<p>Loading recent sightings...</p>`;

  try {
    const response = await fetch("/api/sightings");

    if (!response.ok) {
      throw new Error("Failed to fetch sightings");
    }

    const data = await response.json();
    renderSightings(data);
  } catch (error) {
    sightingsContainer.innerHTML = `
      <p class="no-results">Unable to load recent sightings right now.</p>
    `;
  }
}