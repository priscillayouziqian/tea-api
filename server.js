const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
   'oolong':{
       'type': 'black',
       'origin': 'Yo mommas House',
       'waterTemp': 200,
       'steepTimeSecond': 180,
       'caffinated': true,
       'flavor': 'delicious',
   },
   'matcha': {
       'type': 'green',
       'origin': 'Yo mommas house',
       'waterTemp': 200,
       'steepTimeSecond': 180,
       'caffinated': false,
       'flavor': 'delicious'
    },
   'unknown':{
       'type': 'unknown',
       'origin': 'Yo mommas House',
       'waterTemp': 200,
       'steepTimeSecond': 180,
       'caffinated': true,
       'flavor': 'delicious'
    }
}

app.get('/', (request, response)=>{
     response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    //whatever I put after api/, :name or :blablabla, it is a quary parameter.
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ){ //using[] not . because we may have spaces in the names.
         response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])//if tea not exsit in our tea object, then response tea unknown.
    }
    //response.json(tea)
})

//want server to listen
app.listen(process.env.PORT || PORT, ()=>{
    //process.env.PORT || PORT, means, if it's on heroku, go head and use their port#; if not on heroku, just use our own.
    console.log(`The server is running on port ${PORT}! Better go catch it!`)
})