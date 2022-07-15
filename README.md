# redis-basics
Comandos básicos do redis

````
yarn
node index.js
````

OUTPOUT: 
````
EXECUTANDO COMANDOS BÁSICOS set get del
redis set: OK
redis get: { value: 'valor' }
redis delete: 1


EXECUTANDO COMANDOS BÁSICOS zAdd zRange zRem 
redis zAdd: 1
redis zAdd: 1
redis zAdd: 1
redis zAdd get all: [ 'valor1', 'valor2', 'valor3' ]
redis zAdd delete: 1
redis zAdd get all: [ 'valor2', 'valor3' ]
redis zAdd delete all: 1
redis zAdd get all: []


EXECUTANDO COMANDOS BÁSICOS geoAdd geoSearch geoDel
redis geoAdd: 1
redis geoAdd: 1
redis geoSearch with radius 50000 km: [
  {
    member: 'Bertioga',
    distance: '2542.9195',
    hash: 914385574105601,
    coordinates: {
      longitude: '-46.07657164335250854',
      latitude: '-23.77576178359472081'
    }
  },
  {
    member: 'São Paulo',
    distance: '2569.2924',
    hash: 914304912924242,
    coordinates: {
      longitude: '-46.63395076990127563',
      latitude: '-23.53426622513870115'
    }
  }
]
redis geoAdd delete: 1
redis geoSearch with radius 50000 km: [
  {
    member: 'São Paulo',
    distance: '2569.2924',
    hash: 914304912924242,
    coordinates: {
      longitude: '-46.63395076990127563',
      latitude: '-23.53426622513870115'
    }
  }
]
redis geoAdd delete all: 1


EXECUTANDO COMANDOS PARA ENCONTRAR DIFERENÇAS DE VALORES ENTRE CHAVES
redis zAdd: 2
redis zAdd: 2
redis zAdd: 2
redis zAdd: 2
redis zAdd: 2
redis zDiff key1 - key2 [ '3' ]
redis zDiff delete all 2
````
