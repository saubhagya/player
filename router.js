var music = require('./music'),
    pics  = require('./pics');

var route = {'/music'   : music.init,
             '/pictures': pics.init
	    };

exports.route = route;

