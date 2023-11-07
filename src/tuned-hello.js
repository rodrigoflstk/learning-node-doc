var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  var name = require('url').parse(req.url, true).query.name;

  if(name === undefined) {
    name = 'world';
  }

  if(name === 'alien') {
    var file = __dirname + '/../files/alien.jpeg';

    fs.stat(file, function (err, stat) {
      if (err) {
        console.error(err);
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Sorry, alien isn't around now!\n");
      } else {
        var img = fs.readFileSync(file);
        res.contentType = 'image/jpeg';
        res.contentLength = stat.size;
        res.end(img, 'binary');
      }
    })
  } else {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello ' + name + '\n');
  }
}).listen(8124);

console.log('Server is running on port 8124');