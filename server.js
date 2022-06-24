const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())
const tea = {
    'chai':{
        'type': 'green',
        'origin': 'china' ,
        'waterTemp': '180',
        'steepTimeSeconds': '980',
        'caffineLevel': 'true',
        'flavor': 'spicey' 
    },
    'peppermint':{
        'type': 'green',
        'origin': 'north pole' ,
        'waterTemp': '200',
        'steepTimeSeconds': '1200',
        'caffineLevel': 'false',
        'flavor': 'cool' 
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown' ,
        'waterTemp': '0',
        'steepTimeSeconds': '0',
        'caffineLevel': 'unknown',
        'flavor': 'unknown' 
    }
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! Better run and catch it.`)
})
