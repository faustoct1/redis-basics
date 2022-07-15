const {createClient} = require('redis')

client = createClient({ url: 'CREATE AN REDIS ACCOUNT AT REDISLABS https://redis.com/ AND PASTE YOUR CREDENTIALS HERE' })

const basicSetGetDeleteSample = async (client) => {
  console.log('EXECUTANDO COMANDOS BÁSICOS set get del')
  //set key value
  console.log('redis set:', await client.set('key',JSON.stringify({value:'valor'})) )
  //get value of key
  console.log('redis get:', JSON.parse(await client.get('key')) )  
  //delete a key value
  console.log('redis delete:', JSON.parse(await client.del('key')) )
}

const zFamilySample = async (client) => {
  console.log('\n\nEXECUTANDO COMANDOS BÁSICOS zAdd zRange zRem ')
  //add a value to a set/array by key
  console.log('redis zAdd:', await client.zAdd('key',{score:1,value:'valor1'},{INCR:true})) 
  //add a value to a set/array by key
  console.log('redis zAdd:', await client.zAdd('key',{score:1,value:'valor2'},{INCR:true})) 
  //add a value to a set/array by key
  console.log('redis zAdd:', await client.zAdd('key',{score:1,value:'valor3'},{INCR:true})) 
  //get all values of the set/array by key
  console.log('redis zAdd get all:', await client.zRange('key',0,-1)) 
  //delete a value of the set/array by key
  console.log('redis zAdd delete:', await client.zRem('key','valor1'))
  //get all values of the set/array by key
  console.log('redis zAdd get all:', await client.zRange('key',0,-1))  
  //delete all values of the set/array by key
  console.log('redis zAdd delete all:', await client.del('key',0,-1))  
  //get all values of the set/array by key
  console.log('redis zAdd get all:', await client.zRange('key',0,-1))
}

const geoFamilySample = async (client) => {
  console.log('\n\nEXECUTANDO COMANDOS BÁSICOS geoAdd geoSearch geoDel')
  console.log('redis geoAdd:', await client.geoAdd('key',{latitude: -23.7757625, longitude: -46.0765743, member: 'Bertioga'}))
  console.log('redis geoAdd:', await client.geoAdd('key',{latitude: -23.5342666, longitude: -46.6339501, member: 'São Paulo'}))
  console.log('redis geoSearch with radius 50000 km:', await client.geoSearchWith('key',{latitude:-46.6339501,longitude:-46.6339501},{radius: 50000, unit: 'km'},['WITHDIST','WITHHASH','WITHCOORD'],{SORT:'ASC'}))
  console.log('redis geoAdd delete:', await client.zRem('key','Bertioga'))
  console.log('redis geoSearch with radius 50000 km:', await client.geoSearchWith('key',{latitude:-46.6339501,longitude:-46.6339501},{radius: 50000, unit: 'km'},['WITHDIST','WITHHASH','WITHCOORD'],{SORT:'ASC'}))
  console.log('redis geoAdd delete all:', await client.del('key'))
}

const diffSample = async (client) => {
  console.log('\n\nEXECUTANDO COMANDOS PARA ENCONTRAR DIFERENÇAS DE VALORES ENTRE CHAVES')
  console.log('redis zAdd:', await client.zAdd('key1',{score:1,value:'1'},{INCR:true})) 
  console.log('redis zAdd:', await client.zAdd('key1',{score:1,value:'2'},{INCR:true})) 
  console.log('redis zAdd:', await client.zAdd('key1',{score:1,value:'3'},{INCR:true})) 
  console.log('redis zAdd:', await client.zAdd('key2',{score:1,value:'1'},{INCR:true})) 
  console.log('redis zAdd:', await client.zAdd('key2',{score:1,value:'2'},{INCR:true})) 
  console.log('redis zDiff key1 - key2', await client.zDiff(['key1','key2']))
  console.log('redis zDiff delete all', await client.del(['key1','key2']))
}

const samples = async (client) => {
  await basicSetGetDeleteSample(client)
  await zFamilySample(client)
  await geoFamilySample(client)
  await diffSample(client)
}

const redis = async () => {  
  try{
    await client.connect()
    await samples(client)
  }catch(e){
    console.log(e)
  }finally{
    if(client)client.quit()
  }
}

(async ()=>redis())()