const { MongoClient } = require('mongodb');

class MongoDB{
    //auto connect when call MongoDB
    static async connectMongoDB(uri) {
        if (!this.client){   
            this.client = new MongoClient(uri);
            await this.client.connect(); 
        }    
        return this.client;    
    }
}
module.exports = MongoDB;