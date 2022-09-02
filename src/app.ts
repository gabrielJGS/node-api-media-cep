require("dotenv").config();
import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import calculoRoute from "./routes/calculo.route";
import cepRoute from "./routes/cep.route";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use(calculoRoute);
app.use(cepRoute);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default app;
