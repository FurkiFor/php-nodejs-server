var phpServer = require('node-php-server');
// Furkan Ünsal 
//Furki For
//test Commit Check 
try {

// Create Example Server
phpServer.createServer({
    port: 9999,  
    hostname: '127.0.0.1', 
    base: '.', 
    keepalive: false,
    open: false,
    bin: 'php',
    router: __dirname + '/server.php'
});
    
} catch (error) {
    console.log(error);

}

console.log('Server is Runnig...');