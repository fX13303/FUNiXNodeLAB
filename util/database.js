const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const MongoConnect = callback => {
    MongoClient
    .connect('mongodb+srv://root:hongPHUC.2002@cluster0.cn8ve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!');
        callback(client);
    })
    .catch(err => {
        console.log(err);
    })
}
module.exports = MongoConnect;
