import app from "../src/app";
import supertest from "supertest";

describe("Testa a rota Cep", () => {
  test("testa a rota com um cep válido", async () => {
    const mock_cep = "27510010";
    const mock_ddd = "24";

    const response = await supertest(app).get(`/buscacep/${mock_cep}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.ddd).toEqual(mock_ddd);
  });

  test("testa o tratamento de erros no caso de cep inválido", async () => {
    const mock_cep = "2751001";

    const response = await supertest(app).get(`/buscacep/${mock_cep}`);
    expect(response.statusCode).toEqual(500);
  });

  test("testa o tratamento de erros no caso de cep não preenchido", async () => {
    const mock_cep: any = null;

    const response = await supertest(app).get(`/buscacep/${mock_cep}`);

    expect(response.statusCode).toEqual(500);
  });

  test("testa o tratamento de erros no caso de cep não encontrado", async () => {
    const mock_cep = "18765285";

    const response = await supertest(app).get(`/buscacep/${mock_cep}`);

    expect(response.statusCode).toEqual(500);
  });

});
