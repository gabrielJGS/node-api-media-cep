require('dotenv').config();
import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import calculoRoute from "./routes/calculo.route";
import cepRoute from "./routes/cep.route";

const { PORT } = process.env || 3333;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use(calculoRoute);
app.use(cepRoute);

app.listen(PORT, () => {
  console.log(`Aplicação executando na porta ${PORT}`);
});
