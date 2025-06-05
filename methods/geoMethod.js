const { getReverseGeocoding } = require("../services/geoService");

const setGeolocation = async (req) => {
  console.log("geomethods");
  const { latitude, longitude, accuracy } = req.body;
  const user = req.user;

  if (!latitude || !longitude) {
    throw new Error("Координати не передані");
  }

  const address = await getReverseGeocoding(latitude, longitude);

  console.log(`User ${user.username} sent location:`, address);

  return {
    message: "Геолокацію збережено",
    data: {
      address: address,
    },
  };
};

const deleteGeolocation = async (req) => {
  const user = req.user;
  console.log(`Geo cleared for ${user.username}`);

  return { message: "Геолокація очищена" };
};

module.exports = { setGeolocation, deleteGeolocation };
