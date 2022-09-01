import CalculoMedia from "../models/CalculoMedia";
import ParameterError from "../models/errors/parameter.error.model";

class CalculoMediaRepository {
  async calcular(n1: number, n2: number): Promise<number> {
    try {
      const calculoMedia = new CalculoMedia(n1, n2);
      return calculoMedia.calcular();
    } catch (error) {
      throw new ParameterError("Erro ao realizar o cálculo", error);
    }
  }
}

export default new CalculoMediaRepository();
