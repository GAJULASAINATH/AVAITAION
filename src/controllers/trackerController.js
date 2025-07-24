// controllers/trackerController.js
import axios from "axios";

export const getFlightTrack = async (req, res) => {
  const { icao24 } = req.params;
  console.log("TRACKING REQUEST - params:", req.params);

  try {
    const response = await axios.get(
      `https://opensky-network.org/api/states/all?icao24=${icao24}`,{
    auth: {
      username: process.env.OPENSKY_USERNAME,
      password: process.env.OPENSKY_PASSWORD,
    },}
    );

    const [_, __, ___, ___1, longitude, latitude, baro_altitude, ___2, ___3, velocity, heading, vertical_rate, ___4, ___5, geo_altitude, squawk, ___6, last_contact] =
      response.data.states?.[0] || [];

    if (!latitude || !longitude) {
      return res.status(404).json({ error: "Aircraft position not found." });
    }

    res.json({
      icao24,
      callsign: response.data.states?.[0][1],
      origin_country: response.data.states?.[0][2],
      latitude,
      longitude,
      baro_altitude,
      velocity,
      heading,
      vertical_rate,
      geo_altitude,
      squawk,
      last_contact
    });
  } catch (err) {
    console.error("Flight tracking error:", err.message);
    res.status(500).json({ error: "Unable to track aircraft" });
  }
};
