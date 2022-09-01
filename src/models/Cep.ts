import ForbiddenError from "./errors/forbidden.error.model";

class BuscaCep {
  cep: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;

  constructor(cep: string) {
    const regexCep = /^[0-9]{5}[0-9]{3}$/;
    if (!cep) throw new ForbiddenError("Cep não preenchido");
    const isValid = regexCep.test(cep);
    if (!isValid) throw new ForbiddenError("Cep em formato inválido");

    this.cep = cep;
  }
}

export default BuscaCep;
