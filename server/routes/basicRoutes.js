const mongoose = require('mongoose');
const User = mongoose.model('users');
const requiredLogin = require('../middlewares/requiredLogin');
var bcrypt = require('bcrypt-nodejs');
var hash = bcrypt.hashSync('bacon');
module.exports = app => {
	app.post('/api/updatePassword', requiredLogin, (req, res) => {
		User.findOne({ _id: req.user._id }, (err, result) => {
			bcrypt.compare(req.body.oldPassword, result.password, function(err, ans) {
				console.log(ans);
				if (ans == true) {
					bcrypt.hash(req.body.newPassword, null, null, function(err, pwd) {
						User.findOneAndUpdate(
							{ _id: req.user._id },
							{ $set: { password: pwd } },
							(err, result) => {
								res.send(result);
							}
						);
					});
				} else {
					res.send('password cannot be changed');
				}
			});
		});
	});

	app.post('/api/updateProfile', requiredLogin, (req, res) => {
		User.findOneAndUpdate(
			{ _id: req.user._id },
			{ $set: { city: req.body.city, state: req.body.state } },
			(err, result) => {
				res.send(result);
			}
		);
	});

	app.post('/api/addBooks', requiredLogin, (req, res) => {
		User.findOneAndUpdate(
			{ _id: req.user._id },
			{
				$push: {
					books: { title: req.body.title, thumbnail: req.body.thumbnail }
				}
			},
			(err, result) => {
				res.send(req.user._id);
			}
		);
	});

	app.get('/api/allBooks', requiredLogin, (req, res) => {
		User.find({}, (err, result) => {
			let tar = [];
			result.forEach(item => tar.push(...item.books));
			console.log(tar);
			res.send(tar);
		});
	});

	app.post('/api/request', requiredLogin, (req, res) => {
		//user 1 makes a request to get a book.

		User.findOne(
			{ books: { $elemMatch: { _id: req.body.id } } },
			(err, result) => {
				console.log(result);
				for (let i = 0; i < result.books.length; i++) {
					if (result.books[i]._id == req.body.id) {
						User.findOneAndUpdate(
							{ _id: result._id },
							{
								$push: {
									requests: {
										senders_id: result._id,
										books_id: result.books[i]._id,
										title: result.books[i].title,
										thumbnail: result.books[i].thumbnail
									}
								}
							},
							(err, result) => {
								console.log(err);
							}
						);
						User.findOneAndUpdate(
							{ _id: req.user._id },
							{
								$push: {
									madeByUserRequests: {
										receiver_id: result._id,
										books_id: result.books[i]._id,
										title: result.books[i].title,
										thumbnail: result.books[i].thumbnail
									}
								}
							},
							(err, result) => {
								res.send(result);
							}
						);
					}
				}
			}
		);
	});

	app.post('/api/approve', requiredLogin, (req, res) => {
		//User 2 approves the request:
		// we would have here:
		//1.title
		//2.thumbnail
		//1. add this book to 'books' array to the user 1 by sender's id.
		User.findOneAndUpdate(
			{ _id: req.body.sendersId }, //sender's id
			{
				$push: {
					books: { title: req.body.title, thumbnail: req.body.thumbnail }
				}
			},
			(err, result) => {
				console.log(result.requests);
			}
		);
		//2. delete the book from 'book' and from 'requests' arrays
		User.update(
			{ _id: req.user._id }, //user 2 id req.user.id
			{ $pull: { requests: { title: req.body.title } } },
			(err, result) => {
				console.log(err);
			}
		);
		User.update(
			{ _id: req.user._id }, //user 2 id req.user.id
			{ $pull: { books: { title: req.body.title } } },
			(err, result) => {
				console.log(err);
			}
		);
		//3. send feedback that book has been traded
		res.send('Book has been traded');
	});
	app.get('/api/getPendingRequests', requiredLogin, (req, res) => {
		User.findOne({ _id: req.user._id }, (err, result) => {
			res.send(result.requests);
		});
	});
	app.get('/api/getuser', requiredLogin, (req, res) => {
		console.log(req.user);
		if (req.user._id) {
			return res.send(true);
		} else return res.send(false);
	});
	app.get('/api/getMyRequests', requiredLogin, (req, res) => {
		User.findOne({ _id: req.user._id }, (err, result) => {
			res.send(result.madeByUserRequests);
		});
	});

	app.post('/api/cancelrequest', requiredLogin, (req, res) => {
		User.update(
			{ _id: req.user._id },
			{ $pull: { madeByUserRequests: { books_id: req.body.bookId } } },
			(err, result) => {
				User.findOne({ _id: req.user._id }, (err, resulted) => {
					res.send(resulted.madeByUserRequests);
				});
			}
		);
	});

	app.post('/api/cancelpendingrequest', requiredLogin, (req, res) => {
		User.update(
			{ _id: req.user._id },
			{ $pull: { requests: { books_id: req.body.bookId } } },
			(err, result) => {
				User.findOne({ _id: req.user._id }, (err, resulted) => {
					res.send(resulted.requests);
				});
			}
		);
	});

	app.get('/signout', requiredLogin, (req, res) => {
		req.logout();
		req.user = null;
		res.redirect('/');
	});
	app.get('/api/currentbooks', (req, res) => {
		User.find({ _id: req.user._id }, (err, result) => {
			res.send(result[0].books);
		});
	});
};
