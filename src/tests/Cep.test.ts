import Cep from "../models/Cep";

describe("Testa a classe Cep", () => {
  test("testa a instanciacao com um cep válido", () => {
    const mock_cep = "27510010";

    const cep = new Cep(mock_cep);

    expect(cep.cep).toEqual(mock_cep);
  });

  test("testa o tratamento de erros no caso de cep inválido", () => {
    const mock_cep = "2751001";

    expect(() => {
      new Cep(mock_cep);
    }).toThrow("Cep em formato inválido");
  });

  test("testa o tratamento de erros no caso de cep não preenchido", () => {
    const mock_cep:any = null;

    expect(() => {
      new Cep(mock_cep);
    }).toThrow("Cep não preenchido");
  });
});
