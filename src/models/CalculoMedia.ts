import ParameterError from "./errors/parameter.error.model";

class CalculaMedia {
  primeiroNumero: number;
  segundoNumero: number;
  constructor(n1: number, n2: number) {
    if (!n1 || typeof n1 != "number" || !n2 || typeof n2 != "number") {
      throw new ParameterError("Os parâmetros não foram informados ou não são do tipo número");
    }
    this.primeiroNumero = n1;
    this.segundoNumero = n2;
  }
  calcular() {
    const media = (this.primeiroNumero + this.segundoNumero) / 2;
    const arredondar = Math.round(media * 1e2) / 1e2;
    return arredondar;
  }
}

export default CalculaMedia;
