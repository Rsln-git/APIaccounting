const axios = require("axios");

const getReverseGeocoding = async (latitude, longitude) => {
  console.log("geoservice", latitude, longitude);
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=uk`;
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "AdminstrativeServices/1.0 (w0rkp0stfirst@gmail.com)",
      },
    });
    // console.log("geoservice response service", response);
    if (response.status === 200) {
      const geoData = response.data;

      const address = {
        displayName: geoData.display_name,
        address: geoData.address,
      };

      console.log("geoservice address", address);
      return address;
    }
  } catch (error) {
    console.error(error);
  }

  //   if (!data) {
  //     throw new Error("Не вдалося отримати адресу з координат");
  //   }
  // console.log("geoservice address ", data);

  //   console.log("geoservice address ", address);
};

module.exports = {
  getReverseGeocoding,
};
