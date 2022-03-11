# poc-vue

<p>A POC tem como objetivo cria exemplos de testes unitários e e2e.</p>

### Custodiante: Image Recognition


# Links
- [Local](http://localhost:8080)
- [Cypress](https://www.cypress.io/)
- [Jest](https://jestjs.io/)
- [Vue Test Utils](https://v1.test-utils.vuejs.org/)

## Pre requisitos para execução da POC local

É necessario instalar as seguintes ferramentas para executar a POC localmente:

* [Node](https://nodejs.org/en/download/)
* [Mock Server](https://www.npmjs.com/package/mock-json-server)
  * `` npm install -g mock-json-server ``


### Rodar testes

#### Teste Unitários
```
npm run test:unit
```

#### Testes end-to-end

Prmeiro rode stub serve
```
mock-json-server tests/e2e/stubs/stub.json --port=4000

or

npm run stub:serve
```
<i>É necessário instalar ``mock-json-server``.</i>

Depois 
```
npm run test:e2e
```




### Padrão de testes utlizados

* [XUnit Test Patterns - Four Phase Test](http://xunitpatterns.com/Four%20Phase%20Test.html)
* [XUnit Test Patterns - Creation Method](http://xunitpatterns.com/Creation%20Method.html)



