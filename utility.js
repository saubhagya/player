var isValidType = function(validTypes, fileName) {
    var i = fileName.lastIndexOf('.'),
        ext = (i < 0) ? '' : fileName.substr(i);

    return validTypes.indexOf(ext) == -1 ? false : true;
};

var getDirFiles = function(dir) {
    fs.readdir(dir, function(err, list) {
        if (err) throw err;
        // Do the needful
    });
};

exports.isValidType = isValidType;
exports.getDirFiles = getDirFiles;
