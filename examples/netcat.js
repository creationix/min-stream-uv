var tcp = require('../tcp');
var uvSink = require('../uv_stream_to_sink');
var uvSource = require('../uv_stream_to_source');

var host = process.argv[2];
var port = parseInt(process.argv[3], 10);

if (!host || !port) {
  console.error("USE: `node " + process.argv[1] + " <host> <port>`");
  process.exit(1);
}

// Connect to the server and pipe it to stdin and stdout.
tcp.connect(host, port, function (err, socket) {
  if (err) throw err;
  uvSink(process.stdout._handle)((socket.source));
  socket.sink(uvSource(process.stdin._handle));
});
