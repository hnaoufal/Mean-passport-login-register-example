var express = require('express'),
	logger = require('morgan'),
	bodyParser= require('body-parser'),
	stylus = require('stylus'),
	cookieParser= require('cookie-parser'),
	passport= require('passport'),
	session= require('express-session');

module.exports = function(app,config){
	function compile(str, path){
	 return stylus(str).set('filename',path);
	}

	app.set('views', config.rootPath+ '/server/views');
	app.set('view engine','jade');
	app.use(logger('dev'));
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(session({secret: 'multi vision unicorns',
		saveUninitialized: true,
	  resave: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(stylus.middleware(
		{
		src: config.rootPath+ '/public',
		compile: compile
		}
	));
	app.use(express.static(config.rootPath+ '/public'));
};
