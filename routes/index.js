'use strict';

exports.index = function(req, res) {
	res.render('index', { title: 'SSE demo' });
};

exports.events = function(req, res) {
	require('../models/eventsource')(req,res);
};