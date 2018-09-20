
const block = require("./block.js");


module.exports = class blockchain {
    constructor(index,timestamp,data,previoushash=''){

    this.chain=[this.createGensisBlock()]
    this.diffuclty=2
    }

    createGensisBlock(){
        return new block('0','Bitcion v99','0xc')
    }

    getlatestBlock(){
        return this.chain[this.chain.length-1]
    }

    addBlock(newBlock){
        newBlock.previoushash=this.getlatestBlock().hash
        //newBlock.hash=newBlock.calculateHash()
        newBlock.minnedBlock(this.diffuclty)
        this.chain.push(newBlock)
        
    }
    isChain(){
        // check if this block hash = pervious blockhash 
        //check if this hash has same hash code of created hash
        for(let i=1; i<this.chain.length; i++){
            const currentBlock= this.chain[i]
            const PerviousBlock= this.chain[i-1]

            if(currentBlock.hash != currentBlock.calculateHash())
                return false
            if(currentBlock.previoushash != PerviousBlock.hash)
                return false
            
    }
        return true
}


}

/*
let ParophsCoin = new blockchain()
ParophsCoin.addBlock(new block(1,"19-9-2018",{amout:4}))
ParophsCoin.addBlock(new block(1,"19-9-2018",{amout:4}))

console.log(JSON.stringify(ParophsCoin,null,4))

*/