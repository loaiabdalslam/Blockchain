
const http = require('http')
const express=require('express')
const app = express();

const blockchain= require('./chain.js')
const block = require("./block.js");
const transaction = require("./transaction.js");


let PharosToken = new blockchain()
//PharosToken.addBlock(new block(1,"19-9-2018",{amout:4}))

PharosToken.createTransaction(new transaction('address-1','address-2',50))
PharosToken.createTransaction(new transaction('address-2','address-1',50))
PharosToken.createTransaction(new transaction('address-2','address-3',25))
PharosToken.MinependdingTransaction('xxx-1')
console.log(PharosToken.getbalance('address-2'))
console.log(PharosToken.getbalance('address-3'))
console.log(PharosToken.getbalance('xxx-1'))





/*
app.get('/getChain',function(req,res){
res.send(JSON.stringify(PharosToken));

console.log(PharosToken.isChain())
})


app.listen(8080,function(){
    console.log('go')
})

*/