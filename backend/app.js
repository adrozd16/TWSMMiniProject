let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let ObjectID = require('bson/lib/bson/objectid');
let app = express();
const port = 3000;

const MongoClient = require("mongodb").MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'feh';
const dbClient  = new MongoClient(dbUrl);
let db;

dbClient.connect((err) => {
    console.log("Połączono poprawnie z MongoDB server");
    db = dbClient.db(dbName);
    //dbClient.close();
}, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello world"));
app.get("/api/characters/:id", (req, res) => {
    db.collection("characters")
    .findOne({"_id": new ObjectID(req.params.id)})
    .then((doc) => res.send(doc));
})
app.get("/api/characters", (req, res) => {
    const collection = db.collection("characters");
    // console.log(collection);
    // collection.find({}).forEach(element => {
    //     console.log(element);
    // });
    collection.find({}).toArray((err, docs) => {
        // console.log(err);
        // res.send(JSON.stringify(docs));
        res.send(docs);
    })
    // res.send(JSON.stringify([{
    //     name: "Xena",
    //     level: 150
    // },
    // {
    //     name: "Batman1",
    //     level: 100
    // }]))
})

app.post("/api/characters", (req, res) => {
    db.collection("userCharacters")
    .insertOne(req.body)
    .then((doc) => res.send(doc));
});

app.get("/api/characters/user/:username", (req, res) => {
    db.collection("userCharacters")
    .find({"owner": req.params.username})
    .toArray((err, docs) => res.send(docs));
})


app.listen(port, () => console.info("Serwer uruchmiony na porcie " + port));
