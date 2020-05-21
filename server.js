var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var tables = [
    {
    id: "",
    name: "",
    email: "",
    phone: ""
}];


var waiting = [
    {
    id: "",
    name: "",
    email: "",
    phone: ""
}
];

// app.post('/api/tables', function(req, res){
//     res.sendFile(path.join(__dirname, 'tables.html'))
// })

// app.post('/api/waiting', function(req, res){
//     res.sendFile(path.join(__dirname, 'tables.html'))
// })

app.post("/api/tables", function(req, res) {
    var newTable = req.body;
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
});

app.post("/api/waiting", function(req, res) {
    var newWait = req.body;
    console.log(newWait);
    waiting.push(newWait);
    res.json(newWait);
});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req,res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req,res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
   return res.json(tables);
});

app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
    //http://localhost:8080/
})
