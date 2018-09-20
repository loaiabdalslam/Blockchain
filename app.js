
const http = require('http')
const express=require('express')
const app = express();
const blockchain= require('./chain.js')
const block = require("./block.js");


let PharosToken = new blockchain()
PharosToken.addBlock(new block(1,"19-9-2018",{amout:4}))
//PharosToken.addBlock(new block(2,"19-9-2012",{amout:8}))



app.get('/getChain',function(req,res){
res.send(JSON.stringify(PharosToken));

console.log(PharosToken.isChain())
})


app.listen(8080,function(){
    console.log('go')
})

