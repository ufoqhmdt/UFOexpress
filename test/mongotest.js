var MongoClient = require('mongodb').MongoClient, format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/anywhere', function(err, db) {
	if (err)
		throw err;

	var collection = db.collection('registerInfo');

	function insert() {
		for (var i = 0; i < 50; i++) {
			collection.insert({
				firstName : "firstName" + i,
				lastName : "lastName" + i,
				company : "company" + i,
				industry : "industry" + i,
				city : "city" + i,
				country : "country" + i,
				email : "email" + i,
				phone : "phone" + i,
				relationship : "relationship" + i,
			}, function(err, docs) {

				collection.count(function(err, count) {
					console.log(format("count = %s", count));
				});

				// Locate all the entries using find
				/*
				 collection.find().toArray(function(err, results) {
				 // console.dir(results);
				 // Let's close the db
				 db.close();
				 });*/

			});
		}
	}

	function findOne(objectId) {
		var ObjectID = require('mongodb').ObjectID;

		collection.findOne({
			_id : new ObjectID(objectId)
		}, console.log);
	}

	findOne("5285fb631f06e4c81700000d");

	function constructorTypes() {
		var mongo = require('mongodb');
		// Create new instances of BSON types
		new mongo.Long(12333333333);
		new mongo.ObjectID(0x323232323);
		new mongo.Timestamp();// the actual unique number is generated on insert.;
		new mongo.DBRef("collectionName", "id", "dbName");
		new mongo.Binary("buffer");// takes a string or Buffer;
		new mongo.Code(code, [context]);
		new mongo.Symbol(string);
		new mongo.MinKey();
		new mongo.MaxKey();
		new mongo.Double(number) // Force double storage;
	}

});
