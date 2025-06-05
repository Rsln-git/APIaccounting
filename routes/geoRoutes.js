const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");
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
 *     security:
 *       - bearerAuth: []
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

router.post("/geolocation", authenticateToken, setGeo);

/**
 * @swagger
 * /geo/cleargeo:
 *   delete:
 *     summary: Очистити геолокацію
 *     tags: [Geolocation]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Геолокацію очищено
 */
router.delete("/cleargeo", authenticateToken, deleteGeo);

module.exports = router;
