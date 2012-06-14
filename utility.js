var path = require('path'),
    fs   = require('fs');

var isValidType = function(validTypes, fileName) {
    var i = fileName.lastIndexOf('.'),
        ext = (i < 0) ? '' : fileName.substr(i);

    return validTypes.indexOf(ext) == -1 ? false : true;
};

var getDirFiles = function(dir, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) throw err;
        callback(list);
    });
};

var serveFile = function(res, uri) {
    path.exists(uri, function(exists) {
        if (exists) {
            fs.readFile(uri, function(error, content) {
                if (error) {
                    res.writeHead('500');
                    res.end();
                } else {
                    res.writeHead('200');
                    res.write(content);
                    res.end();
                }
            });
        } else {
            res.writeHead('404');
            res.end();
        }
    });
};

exports.isValidType = isValidType;
exports.getDirFiles = getDirFiles;
exports.serveFile   = serveFile;

