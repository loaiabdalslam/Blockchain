const SHA256 = require("crypto-js/sha256");

module.exports = class block {


    constructor(timestamp,transactions,previoushash){
        this.transactions = transactions;
        this.timestamp= timestamp
        this.previoushash=previoushash
        this.hash=this.calculateHash()
        this.nonce=0
    }

    calculateHash(){
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    minnedBlock(diffuclty){

        while(this.hash.substring(0,diffuclty) !== Array(diffuclty+1).join('0')){
                this.nonce +=1
                this.hash=this.calculateHash()
               
        }     

        console.log('Block Mined :',this.hash)


    }

  
    
}