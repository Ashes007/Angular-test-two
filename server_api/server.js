var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/testtwo");

app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 }); 

var nameSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});
var Contactus = mongoose.model("contactus", nameSchema);

app.get('/', (req, res) => {
  res.send('api works');
  console.log('AnguolarTest');
});

app.post('/contact', function (req, res) {
   var myData = new Contactus(req.body);
   myData.save()
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      res.status(400).send({errmsg: "unable to save to database"});
    });

})

app.get('/contactlist',function(req, res){

  Contactus.find({}, function(err, contacts) {
    var contactMap = [];
    contacts.forEach(function(contact) {
      contactMap.push(contact);
    });
    res.send(contactMap);  
  });

});

app.get('/edit/:id',function(req, res){
  var id = req.params.id;
  Contactus.find({_id:id}, function(err, contacts) {    
    res.send(contacts);  
  });
});

app.post('/update/:id', function (req, res) {
  var id = req.params.id;

  var query = { _id: id };
  //The upsert = true option creates the object if it doesn't exist. defaults to false.
  Contactus.update(query, req.body, {upsert:true}, function(err,succ){
      if(err) res.send(err);
      else res.send(succ);  
  });

})

app.post('/delete', function(req,res){
  var data = req.body;
  Contactus.remove(data, function(err, contact){
        if(err) res.json(err);
        else {
                  Contactus.find({}, function(err, contacts) {
                      var contactMap = [];
                      contacts.forEach(function(contact) {
                        contactMap.push(contact);
                      });
                        res.send(contactMap);  
                  });

              }
    });

});

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port)
})