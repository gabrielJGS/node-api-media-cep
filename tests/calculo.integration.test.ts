import app from "../src/app";
import supertest from "supertest";

describe("Testa a rota calculo", () => {
  test("testa a rota com números válidos", async () => {
    const mock_numeros = {
      n1: 5,
      n2: 4,
    };
    const mock_result = 4.5;

    const response = await supertest(app).post(`/calculomedia`).send(mock_numeros);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(mock_result);
  });

  test("testa o tratamento de erros no caso de números inválido", async () => {
    const mock_numeros = {
      n1: "5",
      n2: 4,
    };
    const response = await supertest(app).post(`/calculomedia`).send(mock_numeros);
    expect(response.statusCode).toEqual(500);
  });

  test("testa o tratamento de erros no caso de números não preenchidos", async () => {
    const mock_numeros = {
      n2: 4,
    };

    const response = await supertest(app).post(`/calculomedia`).send(mock_numeros);

    expect(response.statusCode).toEqual(500);
  });
});
