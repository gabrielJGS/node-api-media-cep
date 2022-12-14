# API criada para um teste prático
- Typescript
- Node
- Express
- Http-Status-Code
- Jest
- Docker
- Swagger

## Utilizando:
- Realize o clone deste repositório
- Caso queira rodar localmente:  
```npm i && npm run dev```  
- Caso queira rodar os testes:  
```npm run test```  
- Caso vá rodar pelo container, realize o build do projeto:  
```docker build . -t node-mepoupe-test --no-cache```  
- Em seguida:  
```docker run -p 3333:3333 -d node-mepoupe-test```  

### Consultar documentação em  
```http://localhost:3333/docs/```

# Crie um projeto Node.JS e implemente os seguintes 2 endPoints:
## 1- Cálculo da média
Precisamos fazer o cálculo da média de 2 números, para isto será necessário ter um endpoint que receba esses 2 números e nos retorne a média dos mesmos.  
O resultado precisa estar arredondado em duas casas decimais utilizando a estratégia de arredondamento Half Round Up.  
O mesmo precisará rodar num docker, para isto o projeto tem que estar corretamente conteinerizado/dockerizado.  
Temos que ter tratamento de erro caso os parâmetros estejam errados, inválidos ou inexistentes.  
Precisamos implementar Log para saber o que está acontecendo, ou seja, que cálculos estão sendo feitos neste componente.  
  
## 2.- Consulta de CEP.
Precisamos criar um outro endPoint que receba um cep e que o mesmo faça uma consulta deste CEP na viaCEP (https://viacep.com.br/)  
O Serviço que precisa ser chamado no ViaCEP é o seguinte: https://viacep.com.br/ws/XXXXXXXX/json  
Onde o XXXXXXXX é um Cep válido.  
Este endereço tem que ser retornado para o chamador, caso o Bairro não seja encontrado na ViaCEP, além do resto das informações, uma mensagem tem que ser retornada para o cliente   informando que não foi possível encontrar o Bairro deste CEP. Exemplo de CEP sem Bairro :18150000  
Use TypeScript.  
Divida em camadas de responsabilidade única, com classes e métodos coesos. Vá pela simplicidade do código.  
Implemente testes automatizados.  

### Tarefas:
- Rota Calculo de Media X
- Rota Consulta de cep X
- Log X
- Docker X
- Testes X
- Documentação X
