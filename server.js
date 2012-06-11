var http   = require('http'),
    url    = require('url'),
    router = require('./router');

http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true),
        pathname  = parsedUrl.pathname;

    if (pathname in router.route) {
        router.route[pathname](parsedUrl.query, res);
    } else {
        res.writeHead('404');
	res.end();
    }
}).listen(9000);

