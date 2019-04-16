# xy-Inc
Projeto para localização de POIs (Pontos de Interesse)

## Tecnologias
1. Nodejs
2. Express
3. MongoDB

## Passo a passo
Primeiramente baixe o projeto.
Na pasta raiz /xy-Inc 
```
npm install
```

Depois execute: 

```
npm start
```

### Banco de dados
Para a praticidade foi utilizado docker com a imagem do MongoDB. 
Para a utilização vá a pasta raiz e execute

```
docker-compose up
```

## Configuração
Para a realização dos testes foram feitos os seguintes serviços:

### GET
1. /listRangePois?coordX=20&coordY=10
  Retorna os pontos de interesses até 10 metros de x ou y.

```
Lanchonete
Joalheria
Pub
Supermercado
```

2. /listAllPois
  Retorna todos os pontos de interesses
 
### POST
3. /poi
  Inserção de um ponto de interesse.
```    
{
	"name": "Farmacia",
	"coordX": 25,
	"coordY": 20
}    
```  
