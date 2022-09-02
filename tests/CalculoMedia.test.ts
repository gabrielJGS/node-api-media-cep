import CalculoMedia from "../src/models/CalculoMedia";

describe("Testa a classe CalculoMedia", () => {
  test("testa o retorno do calculo da media de 2 numeros", () => {
    const mock_n1 = 5;
    const mock_n2 = 4;

    const calculoMedia = new CalculoMedia(mock_n1, mock_n2);
    const media = calculoMedia.calcular();

    expect(media).toEqual(4.5);
  });

  test("testa o tratamento de erros no caso de parâmetro inválido", () => {
    const mock_n1: any = null;
    const mock_n2 = 2;

    expect(() => {
      new CalculoMedia(mock_n1, mock_n2);
    }).toThrow();
  });
});
