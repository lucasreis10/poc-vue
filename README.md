# poc-vue

<p>A POC tem como objetivo cria exemplos de testes unitários e E2E.</p>

### Custodiante: Image Recognition


# Links
- [Local](http://localhost:8080)
- [Cypress](https://www.cypress.io/)
- [Jest](https://jestjs.io/)
- [Vue Test Utils](https://v1.test-utils.vuejs.org/)

## Pre requisitos para execução da POC local

É necessario instalar as seguintes ferramentas para executar a POC localmente:

* [Node](https://nodejs.org/en/download/)
* [Docker](https://docs.docker.com/get-docker/) - Docker é necessário para executar o backend.


### Rodar testes

#### Teste Unitários
```
npm run test:unit
```

#### Testes End-To-End

Para rodar teste E2E é necessário que o container backend esteja rodando localmente.
``` 
docker run -p 4000:4000 lucasc342/graphqlnode
```

Execução de teste E2E Cypress

```
npm run test:e2e
```


Execução de teste E2E headless Cypress

```
npm run test:e2e:headless
```



### Padrão de testes utlizados

* [XUnit Test Patterns - Four Phase Test](http://xunitpatterns.com/Four%20Phase%20Test.html)
* [XUnit Test Patterns - Creation Method](http://xunitpatterns.com/Creation%20Method.html)
* [Custom Data Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)


