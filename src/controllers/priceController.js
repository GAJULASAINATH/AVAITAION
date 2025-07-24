// Haversine formula
//WWE
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Pricing Model
//WWE
const estimatePrice = (distance) => {
  const baseFare = 3000;
  const ratePerKm = 5;
  return Math.round(baseFare + distance * ratePerKm);
};

// Controller
//WWE
export const estimateFlightPrice = (req, res) => {
  const { lat1, lon1, lat2, lon2 } = req.body;

  if (!lat1 || !lon1 || !lat2 || !lon2) {
    return res.status(400).json({ error: 'Missing coordinates' });
  }

  const distance = calculateDistance(lat1, lon1, lat2, lon2);
  const price = estimatePrice(distance);

  res.status(200).json({
    distance: `${distance.toFixed(2)} km`,
    estimatedPrice: price
  });
};
