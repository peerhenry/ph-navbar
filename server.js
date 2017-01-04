var connect = require('connect');
var serverStatic = require('serve-static');
var port = process.env.PORT || 8080;
connect().use(serverStatic(__dirname)).listen(port, function(){
  console.log('Server running on 8080...');
})