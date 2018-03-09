const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
var bcrypt = require('bcrypt-nodejs');
var hash = bcrypt.hashSync('bacon');
passport.serializeUser((user, done) => {
	done(null, user.id);
});
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});
passport.use(
	'register',
	new LocalStrategy(function(username, password, done) {
		User.findOne({ username: username }, function(err, user) {
			if (err) return done(err);
			if (user) {
				return done(null, false);
				//user already in db
			} else {
				bcrypt.hash(password, null, null, function(err, pwd) {
					// Store hash in your password DB.
					var newUser = new User();
					newUser.username = username;
					newUser.password = pwd;
					newUser.save(function(err) {
						if (err) throw err;
						return done(null, newUser);
					});
				});
			}
		});
	})
);

passport.use(
	'local',
	new LocalStrategy(function(username, password, done) {
		console.log('username', username);
		User.findOne({ username: username }, function(err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false);
			}
			bcrypt.compare(password, user.password, function(err, res) {
				if (res == false) {
					return done(null, false);
				}
				return done(null, user);
			});
		});
	})
);
