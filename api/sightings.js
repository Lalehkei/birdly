export async function GET(request) {
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

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        error: "Unable to load sightings at the moment.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}