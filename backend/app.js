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
    console.log("Connected to MongoDB");
    db = dbClient.db(dbName);
    //dbClient.close();
}, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Welcome to FEH API"));
app.get("/api/characters/:id", (req, res) => {
    db.collection("characters")
    .findOne({"_id": new ObjectID(req.params.id)})
    .then((doc) => res.send(doc));
})
app.get("/api/characters", (req, res) => {
    const collection = db.collection("characters");
    collection.find({}).toArray((err, docs) => {
        res.send(docs);
    })
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


app.listen(port, () => console.info("Server started on port " + port));
