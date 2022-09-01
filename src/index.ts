require('dotenv').config();
import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import calculoRoute from "./routes/calculo.route";
const { PORT } = process.env || 3333;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(calculoRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Aplicação executando na porta ${PORT}`);
});
