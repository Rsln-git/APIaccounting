const { getReverseGeocoding } = require("../services/geoService");

const setGeolocation = async (req) => {
  const { latitude, longitude, accuracy } = req.body;

  if (!latitude || !longitude) {
    throw new Error("Координати не передані");
  }

  const address = await getReverseGeocoding(latitude, longitude);

  console.log(`Location received:`, { latitude, longitude, accuracy, address });

  return {
    message: "Геолокацію збережено",
    data: {
      address: address,
    },
  };
};

const deleteGeolocation = async () => {
  console.log(`Geo cleared`);

  return { message: "Геолокація очищена" };
};

module.exports = { setGeolocation, deleteGeolocation };
