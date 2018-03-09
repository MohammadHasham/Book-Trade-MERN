const passport = require('passport');
module.exports = app => {
	app.get('/', (req, res) => {
		res.send('Logged/Registed');
	});
	app.post(
		'/login',
		passport.authenticate('local', { failureRedirect: '/login' }),
		function(req, res) {
			res.send(req.user);
		}
	);
	app.post(
		'/register',
		passport.authenticate('register', { failureRedirect: '/register' }),
		function(req, res) {
			res.redirect('/');
		}
	);
	app.get('/register', (req, res) => {
		res.send('Failed to register');
	});
	app.get('/login', (req, res) => {
		res.send('Failed to login');
	});
};
