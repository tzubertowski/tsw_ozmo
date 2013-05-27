/*jshint node: true */
var express = require('express');
var http = require('http');
var path = require('path');
var less = require('less-middleware');

var osm = express();

// HTTPek stoi //
osm.configure(function () {
    osm.set('port', process.env.PORT || 3000);
    osm.use(express.favicon());
    osm.use(express.logger('dev'));
    osm.use(less({
        src: __dirname + '/client',
        compress: true
    }));
    osm.use(express.static(path.join(__dirname, 'client')));
});

var server = http.createServer(osm).listen(osm.get('port'), function () {
    console.log("Port serwera: " + osm.get('port'));
});

var io = require('socket.io');
var socket = io.listen(server);

socket.on('connection', function (client) {

});
