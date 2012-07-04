var i = require('../index');
var cp = require('child_process');

i.spawn('echo', ["foo"]);

var f = i.spawn(process.execPath, [__dirname + '/child.js']);
f.stderr.pipe(process.stderr);

setTimeout(function() {
process.send(f.pid);
}, 200);
