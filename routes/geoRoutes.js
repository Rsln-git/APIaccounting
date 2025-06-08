const express = require("express");
const router = express.Router();
const { authenticateApiKey } = require("../middleware/authMiddleware");
const { setGeo, deleteGeo } = require("../controllers/geoController");

/**
 * @swagger
 * tags:
 *   name: Geolocation
 *   description: Geolocation routes
 */

/**
 * @swagger
 * /geo/geolocation:
 *   post:
 *     summary: Зберегти геолокацію
 *     tags: [Geolocation]
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *               accuracy:
 *                 type: number
 *     responses:
 *       200:
 *         description: Геолокація збережена
 */
router.post("/geolocation", authenticateApiKey, setGeo);

/**
 * @swagger
 * /geo/cleargeo:
 *   delete:
 *     summary: Очистити геолокацію
 *     tags: [Geolocation]
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Геолокацію очищено
 */
router.delete("/cleargeo", authenticateApiKey, deleteGeo);

module.exports = router;
