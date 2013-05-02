var uvSink = require('./uv_stream_to_sink');
var uvSource = require('./uv_stream_to_source');

// Wrap the raw libuv stream handles to be min-stream source and sink.
var source = uvSource(process.stdin._handle);
var sink = uvSink(process.stdout._handle);

// Connect them to implement cat
sink(source);