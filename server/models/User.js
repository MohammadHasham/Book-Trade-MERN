const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = new Schema({
	username: String,
	password: String,
	city: String,
	state: String,
	books: [{ title: String, thumbnail: String }],
	requests: [
		{ senders_id: String, books_id: String, title: String, thumbnail: String }
	],
	madeByUserRequests: [
		{ receiver_id: String, books_id: String, title: String, thumbnail: String }
	]
});

mongoose.model('users', User);
