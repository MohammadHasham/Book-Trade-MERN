const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://admin:admin@ds255258.mlab.com:55258/fccbook');
const app = express();
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: ['key']
	})
);
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/basicRoutes')(app);

app.listen(process.env.PORT || 5000, () => {
	console.log('server on 5000');
});
