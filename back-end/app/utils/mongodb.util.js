const { MongoClient } = require('mongodb');

class MongoDB{
    //auto connect when call MongoDB
    static async connect(uri) {
        if (!this.client)    
            this.client = await MongoClient.connect(uri);
        return this.client;    
    }
}
module.exports = MongoDB;