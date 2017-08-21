
const mongodbUrl = 'mongodb://qwe:qwe@ds129333.mlab.com:29333/abc';

// Required noode modules 
var express = require('express');
var path = require('path');
var app = express();	
var router= express.Router();
var mongoClient = require('mongodb').MongoClient;
var cors= require('cors');
var assert= require('assert');
var fs= require('fs');
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

mongoClient.connect(mongodbUrl, function(err, db) {
function getData(){
      //use the find() API and pass an empty query object to retrieve all records
      dbObject.collection("fuel_price").find({}).toArray(function(err, docs){
        if ( err ) throw err;
        var id = [];
        var uid = [];
        var dis = [];
     
        for ( index in docs){
          var doc = docs[];
          //category array
          var id = doc['_id'];
          //series 1 values array
          var uid = doc['uid'];
          //series 2 values array
          var dis = doc['dis'];
          id.push({"label": id});
          uid.push({"value" : uid});
          dis.push({"value" : dis});
        }
     
   
      });
    });
});

app.get("/fuelPrices", function(req, res){
  getData(res);
  
});



/*app.set("view engine", "pug");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

		

mongoClient.connect(mongodbUrl, function(err, db) {
	var collectionName = db.collection('users');
app.get('/save/:query', cors(), function(req, res) {
		var query = req.params.query;

		saveObject = {
			"long": 34.68,
			"abc": 12.89
		}

		res.send(saveObject)

		collectionName.save(saveObject, function(err) {
			if (err) throw err;
		})
	})
});*/
var str="";

/*app.get('/save/:query', cors(), function(req, res) {
mongoClient.connect(mongodbUrl, function(err, db) {
  if (err) throw err;
  
  var cursor= db.collection('meter').find();
  cursor.each(function(err, item){
 if(item!= null){
str= str+"&nbsp;&nbsp;&nbsp;&nbsp;Dis&nbsp;&nbsp;"+item.dis+"<br>";
}});
res.send(str);
str=item.dis;
var cs=str.toString();

res.render("index",cs);
	
});});});*/


    app.get('/find', function(req, res){
    mongoClient.connect(mongodbUrl, function(err, db) {
	if (err) throw err;
        var data = '';
        db.collection('meter').find().each(function(err, data){
            
                var dataObjArr = [];
		var dataArr=[];
                var i = dataObjArr.length;
                //check for error
                if(err){return res.end('error!'+err);}
                //Data
                if (dataObjArr) {
                    while(i--){
                        dataArr[i] = dataObjArr[i]._id;
                    }
                    data = dataArr.join(' ');
                    res.render('index.html', { returnedData : data });
                }else{
                    res.end();
                }
        });
    });
});







var port = process.env.PORT || 2351;
app.listen(port, function() {
	console.log('Node.js listening on port ' + port);
})
