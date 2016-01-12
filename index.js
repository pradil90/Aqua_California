var express = require('express');
var app = express();
var fs = require('fs');
// var redis = require('redis');

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// var url = require('url');

if (process.env.REDISCLOUD_URL) {
    var rtg   = require("url").parse("redis://rediscloud:VL8kbUdVdbLEraSK@pub-redis-18705.us-east-1-4.1.ec2.garantiadata.com:18705");
  var client = require("redis").createClient(rtg.port, rtg.hostname, {no_ready_check: true, 'return_buffers': true});

client.auth(rtg.auth.split(":")[1]);
} else {
    var client = require("redis").createClient();
}

  // var redisConfig = url.parse("redis://rediscloud:VL8kbUdVdbLEraSK@pub-redis-18705.us-east-1-4.1.ec2.garantiadata.com:18705" || "redis://localhost:6379");
  // client = redis.createClient(redisConfig.port, redisConfig.hostname, {no_ready_check: true, 'return_buffers': true}); //https://github.com/Automattic/socket.io-redis/issues/17
// var client = redis.createClient(redisConfig.port, redisConfig.hostname);
client.on('connect', function() {
    console.log('connected to redis');
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));



app.get('/', function(request, response) {
  script = fs.readFileSync("index.html", "utf8");
        response.send(script);
});




app.get('/Drought_flow', function(request, response) {
  script = fs.readFileSync("drought_flow.html", "utf8");
        response.send(script);
});


//REST API for Spider graph UI.

app.get('/MapGraph', function(request, response) {
  script = fs.readFileSync("Aqua_template.html", "utf8");
        response.send(script);
});

app.get('/MapGraph1', function(request, response) {
  script = fs.readFileSync("map_graph.html", "utf8");
        response.send(script);
});


//preciptation data service and page service

app.get('/preciptation_graph', function(request, response) {
  script = fs.readFileSync("bubble1_preciptation_graph.html", "utf8");
 
  // response.writeHead(200, {'Content-Type': 'text/css'});
        response.send(script);
});

app.get('/data.tsv', function(request, response) {
  script = fs.readFileSync("preciptation_data.tsv", "utf8");
 
  // response.writeHead(200, {'Content-Type': 'text/css'});
        response.send(script);
});


app.get('/water_usage', function(request, response) {
  script = fs.readFileSync("bubble2_water_usage.html", "utf8");
        response.send(script);
});

app.get('/temperature', function(request, response) {
  script = fs.readFileSync("bubble3_temperature.html", "utf8");
        response.send(script);
});

app.get('/population_growth', function(request, response) {
  script = fs.readFileSync("bubble4_population.html", "utf8");
        response.send(script);
});

app.get('/reservoirLevels', function(request, response) {
  script = fs.readFileSync("bubble5_reservoir.html", "utf8");
        response.send(script);
});


app.get('/PDSI', function(request, response) {
  script = fs.readFileSync("PDSI_redirect.html", "utf8");
        response.send(script);
});


app.get('/PDSIpage', function(request, response) {
  script = fs.readFileSync("bubble6_PDSI.html", "utf8");
        response.send(script);
});




//REST API for Spider graph UI.

app.get('/data_source', function(request, response) {
  script = fs.readFileSync("data_source.html", "utf8");
        response.send(script);
});

//REST API for Map graph UI for counties and the details.

app.get('/SpiderGraph', function(request, response) {
  script = fs.readFileSync("spider_graph.html", "utf8");
        response.send(script);
});

app.get('/Dashboard', function(request, response) {
  script = fs.readFileSync("Dashboard.html", "utf8");
        response.send(script);
});



app.get('/Settings', function(request, response) {
  script = fs.readFileSync("AdminPage.html", "utf8");
        response.send(script);
});

app.get('/resvoir', function(request, response) {
  script = fs.readFileSync("resvoir.html", "utf8");
        response.send(script);
});

app.get('/WaterManagement', function(request, response) {
  script = fs.readFileSync("Water_Management.html", "utf8");
        response.send(script);
});







app.get('/DroughtMonitor', function(request, response) {
  script = fs.readFileSync("Drought_Monitor.html", "utf8");
        response.send(script);
});

app.get('/DroughtMonitor2', function(request, response) {
  script = fs.readFileSync("Drought_Monitor2.html", "utf8");
        response.send(script);
});

app.get('/del', function(request, response) {
  script = fs.readFileSync("gauges.html", "utf8");
        response.send(script);
});

app.get('/Dashboard/googlef9ead80a439368f0.html', function(request, response) {
  script = fs.readFileSync("googlef9ead80a439368f0.html", "utf8");
        response.send(script);
});

app.get('/Servicereq', function(request, response) {
  script = fs.readFileSync("LoginPage.html", "utf8");
  
        response.send(script);
});

app.get('/ServicereqLogged', function(request, response) {
  script = fs.readFileSync("ServicereqLogged.html", "utf8");
  
        response.send(script);
});
app.get('/registration', function(request, response) {
  script = fs.readFileSync("registration.html", "utf8");
  
        response.send(script);
});

 app.get('/test', function(request, response) {
  script = fs.readFileSync("drought_flow.html", "utf8");
        response.send(script);
});



app.get('/factsloader', function(request, response) {
  script = fs.readFileSync("factspage.html", "utf8");
        response.send(script);
});

app.get('/sequences.js', function(request, response) {
  script = fs.readFileSync("sequences.js", "utf8");
  response.set('Content-Type', 'text/javascript');
        response.send(script);
});
app.get('/sequences.css', function(request, response) {
  script = fs.readFileSync("sequences.css", "utf8");
  response.set('Content-Type', 'text/css');
        response.send(script);
});
app.get('/sheet1.csv', function(request, response) {
  script = fs.readFileSync("sheet1.csv", "utf8");
  response.set('Content-Type', 'text/plain');
        response.send(script);
});

app.get('/liquidFillGauge.js', function(request, response) {
  script = fs.readFileSync("liquidFillGauge.js", "utf8");
  response.set('Content-Type', 'text/javascript');
        response.send(script);
});



app.get('/Waterflow', function(request, response) {
  script = fs.readFileSync("sankeyWater.html", "utf8");
        response.send(script);
});

app.get('/facts', function(request, response) {
  script = fs.readFileSync("facts.html", "utf8");
        response.send(script);
});

app.get('/style.css', function(request, response) {
  script1 = fs.readFileSync("style.css");
  // response.writeHead(200, {'Content-Type': 'text/css'});
        response.send(script1);
});

 

app.get('/ComparisonTable', function(request, response) {
  script = fs.readFileSync("PDSI_comparison.html", "utf8");
        response.send(script);  
});

app.get('/network', function (req, res) {
  res.set('Content-Type', 'text/plain');
 

  res.send("Ip address:" + req.ip + "    " + "hostname address:" + req.hostname + "     " + "Protocol for connection"+ req.protocol + "      ");
     
});
 



app.post("/JSONrediscache/insert", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
     

      var post_json = req.body.JSONobject;
      // var result2 = req.body.JSONkey;
      var result2 = "Dashboard_data";
      console.log(result2);
      console.log(post_json);
      
      // var form1=[];
      // var form1=JSON.parse(result);
     

  // var post_json= JSON.stringify(result);

client.set(result2, post_json, function(err, reply) {
  console.log(reply);
});
  
});

app.get("/JSONrediscache/insert", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
     
var post_json = req.query.JSONobject;
      // var post_json = req.body.JSONobject;
      // var result2 = req.body.JSONkey;
      var result2 = "Dashboard_data";
      console.log(result2);
        console.log(post_json);
      
      // var form1=[];
      // var form1=JSON.parse(result);
     

  // var post_json= JSON.stringify(result);

client.set(result2, post_json, function(err, reply) {
  console.log(reply);
});
  
});


/*
Handler for GET request for querying SQL database to fetch User object in JSON format

Client Type: AJAX request
*/

app.get("/aqua-Service/data", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
var fileName = req.query.data;
    // var fileName = req.params.name;

    console.log(fileName);

client.get(fileName, function(err, reply) {
    console.log(reply);

    // res.send(JSON.parse(reply));
    res.send(reply);
});

  
  });

app.get('/response_tester', function(request, response) {
  script = fs.readFileSync("tester.html", "utf8");
        response.send(script);
});

app.get('/style/js/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/style/js/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

})

app.get('/style/images/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/style/images/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

})





// app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
