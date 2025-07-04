const { setGeolocation, deleteGeolocation } = require("../methods/geoMethod");

const setGeo = async (req, res) => {
  try {
    const result = await setGeolocation(req);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const deleteGeo = async (req, res) => {
  try {
    const result = await deleteGeolocation(req);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = { setGeo, deleteGeo };
