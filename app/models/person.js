//----------------Model Person--------------
var personMod = {
	name: {
		first: String,
		last: String
	},
    dateOfBirth: Date
};
var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema(personMod);
module.exports = mongoose.model('Person', PersonSchema);