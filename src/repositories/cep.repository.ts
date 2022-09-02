import axios from "axios";
import Cep from "../models/Cep";
import ParameterError from "../models/errors/parameter.error.model";

class CalculoMediaRepository {
  async buscaCep(cepParametro: string): Promise<Cep> {
    try {
      const cep = new Cep(cepParametro);
      const cepApi = await axios.get(`https://viacep.com.br/ws/${cepParametro}/json`);
      const cepData = cepApi.data;

      if (cepData.erro === "true") {
        throw new ParameterError("Cep não encontrado pela api");
      }

      if (cepData.bairro === "") {
        throw new ParameterError("Cep sem bairro");
      }
      cep.logradouro = cepData.logradouro;
      cep.complemento = cepData.complemento;
      cep.bairro = cepData.bairro;
      cep.localidade = cepData.localidade;
      cep.uf = cepData.uf;
      cep.ibge = cepData.ibge;
      cep.gia = cepData.gia;
      cep.ddd = cepData.ddd;
      cep.siafi = cepData.siafi;

      return cep;
    } catch (error) {
      throw error;
    }
  }
}

export default new CalculoMediaRepository();
