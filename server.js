const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const geoRoutes = require("./routes/geoRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // твій фронтенд-домен
    credentials: true, // якщо потрібно передавати куки (не обов'язково для JWT)
  })
);
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/geo", geoRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
