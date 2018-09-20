const SHA256 = require("crypto-js/sha256");

module.exports = class block {


    constructor(index,timestamp,data,previoushash=''){
        this.index=index;
        this.timestamp= timestamp
        this.data=data
        this.previoushash=previoushash
        this.hash=this.calculateHash()
        this.nonce=0

    }

    calculateHash(){
        return SHA256(this.index + this.previoushash + this.timestamp + JSON.stringify(this.data) + this.nonce ).toString()
    }

    minnedBlock(diffuclty){
        while(this.hash.substring(0,diffuclty) !== Array(diffuclty+1).join('0')){
                this.nonce +=1
                this.hash=this.calculateHash()
                //console.log('minning 00 '+this.nonce)
        }     

    console.log('block Mined :',this.hash)


    }

  
    
}