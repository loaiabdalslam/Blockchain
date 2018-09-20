
const block = require("./block.js");
const transaction = require("./transaction.js");


module.exports = class blockchain {
    constructor(index,timestamp,data,previoushash=''){

    this.chain=[this.createGensisBlock()]
    this.diffuclty=2
    this.Penddingtransactions=[]
    this.miningReward=100

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

    MinependdingTransaction(MiningRewardAdress){

            const rewardTx = new transaction(null, MiningRewardAdress, this.miningReward)
           
            this.Penddingtransactions.push(rewardTx)

            let NewBlock= new block(Date.now(),this.Penddingtransactions,this.getlatestBlock().hash)
            NewBlock.minnedBlock(this.diffuclty)

            console.log('NewBlock is Mined')

            this.chain.push(NewBlock)

            this.Penddingtransactions=[]


    }

        createTransaction(Transaction){
            this.Penddingtransactions.push(Transaction)
        }

        getbalance(address){
            let balance=0;
            for(const block of this.chain){
                for(const trans of block.transactions){
                
                        if(trans.fromAdress===address)
                            balance-=trans.amount

                        if(trans.ToAdress===address)
                            balance+=trans.amount    
                }
            }
            return balance;
    }
}

