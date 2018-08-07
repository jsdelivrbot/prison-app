var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://marwan01:motdepasse@my-first-cluster-hzz9b.gcp.mongodb.net/First_Database?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   useNewUrlParser: true;
   const collection = client.db("First_Database").collection("First_Collection");
   // perform actions on the collection object
   client.close();
});