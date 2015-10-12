   var mongoose = require('mongoose');
   var Schema = mongoose.Schema;
   var bcrypt   = require('bcrypt-nodejs');

	
	var userSchema = new Schema({	   
	        email        : String,
	        password     : String
	}, {collection: 'User'});



    //methods
	userSchema.methods.generateHash = function(password) {
	    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	};

	
	userSchema.methods.validPassword = function(password) {
	    return bcrypt.compareSync(password, this.password);
	};

	
	module.exports = mongoose.model('User', userSchema);