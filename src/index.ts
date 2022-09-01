import app from "./app";
const { PORT } = process.env || 3333;

app.listen(PORT, () => {
  console.log(`Aplicação executando na porta ${PORT}`);
});
