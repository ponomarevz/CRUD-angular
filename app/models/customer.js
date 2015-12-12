
//----------------Model Customer-------------
var customerMod = {   

	name: {
		first: String,
		last: String
	},
    dateOfBirth: Date,                                                
    companyName: String,
    phone: {
        mobile: Number,
        work: Number
    },
    skype: String
    
};

var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema(customerMod);
module.exports = mongoose.model('Customer', CustomerSchema);