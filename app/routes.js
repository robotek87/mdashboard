var User = require('./models/User');
var passport = require('passport');

module.exports = function(app) {

	app.use(function(req, res, next) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });

    // api ---------------------------------------------------------------------
    app.get('/api/test',isLoggedIn, function(req, res) {
        console.log('api test invoked');
        var testData = {id:'testId',  data:'testData', user: req.user}
        res.json(testData)
    });

    // application -------------------------------------------------------------
    app.get('/', isLoggedIn, function(req, res) {
    	res.sendfile('./public/views/index.html'); 
    });

	app.get('/login', function(req, res) {
        res.sendfile('./public/views/login.html'); 
    });

    app.get('/user',isLoggedIn, function(req, res) {
        res.sendfile('./public/views/user.html'); 
    });


    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/user',
        failureRedirect : '/login',
        failureFlash : true 
    }));

    app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});



};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
        return next();
    else
    	res.redirect('/login');
}