var mongoose = require('mongoose'),
	 crypto = require('crypto');

module.exports= function(config){

	mongoose.connect(config.db);

	var db= mongoose.connection;
	db.on('error',console.error.bind(console, 'connection error...'));
	db.once('open',function callback(){
	 console.log('multivision db opened');
	});

	var userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	userName: String,
	userSalt: String,
	hashedpwd: String
	});

	var User = mongoose.model('User',userSchema);
	
	User.find({}).exec(function(err, collection){
		if(collection.length === 0){
			User.create({firstName:'Hicham',lastName:'Naoufal',userName:'sayfullah'});
			User.create({firstName:'Ala',lastName:'Naoufal',userName:'busof'});
			User.create({firstName:'Ahmad',lastName:'Naoufal',userName:'qassam'});
		}
});
 
function createUserSalt(){

	return crypto.randomBytes(128).toString('base64');
}

function hashpwd(salt,pwd){

	return 
}

};

