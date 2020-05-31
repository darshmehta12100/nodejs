var http = require('http');
var fs = require('fs');

//var server = http.createServer(function(req,res){
    //console.log('request was made: ' + req.url)
    //res.writeHead(200,{'Content-Type':'text/plain'}); //text/plain,text/html,application/json
    //var readStream = fs.createReadStream(__dirname + '/readMe.text','utf8');
    //var writeStream = fs.createWriteStream(__dirname + '/writeMe.text');
    //var readStream = fs.createReadStream(__dirname + '/index.html','utf8');
    //readStream.pipe(res);
    // var obj ={ //JSon object
    //     name : 'Darsh',
    //     gender : 'Male',
    //     age : 20
    // };
    // res.end(JSON.stringify(obj));
    //res.end('helllo everyone!!!');
    
//});

//Routing
var server = http.createServer(function(req,res){
    console.log('request was made :' + req.url );
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/ninjas'){
        var ninjas = [{name:'ryu',age:30},{name:'yoshi',age:32}];
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log('Now listening');


//var readStream = fs.createReadStream(__dirname + '/readMe.text','utf8');
//var writeStream = fs.createWriteStream(__dirname + '/writeMe.text')
// readStream.on('data',function(chunk){
//     console.log('New chunk received: ');
//     writeStream.write(chunk);
// });

