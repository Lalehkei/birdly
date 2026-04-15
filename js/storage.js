function getSightingsFromStorage() {
  const storedSightings = localStorage.getItem("reportedSightings");
  return storedSightings ? JSON.parse(storedSightings) : [];
}

function saveSightingsToStorage(sightings) {
  localStorage.setItem("reportedSightings", JSON.stringify(sightings));
}