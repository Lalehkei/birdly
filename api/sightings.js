export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.ebird.org/v2/data/obs/CA-ON/recent?maxResults=6",
      {
        headers: {
          "X-eBirdApiToken": process.env.EBIRD_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch bird sightings");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Unable to load sightings at the moment.",
      details: error.message,
    });
  }
}