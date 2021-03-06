var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    'article-One' :{
        title:'Abhay kagalkar Page',
        date:'August 20,2017',
        heading:'Article One',
        content: `This is a Web Page of our site Made from imad.hasura-app.io,This is a Web Page of our site Made from imad.hasura-app.io,This is a Web Page of our site Made from imad.hasura-app.io,v,vvvvThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.io`
        
    },
    'article-Two' :{
            title:'Abhay kagalkar Page',
        date:'August 20,2017',
        heading:'Article One',
        content: `Hello this Abay`
        
    },
    'article-Three':{
             title:'Abhay kagalkar Page',
        date:'August 20,2017',
        heading:'Article One',
        content: `Hello this Article three`
    }
    
};
function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    
var htmlTemplate=`
<!DOCTYPE html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width-device-width, initial-scale=1">
        <link href="ui/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>&nbsp; &nbsp;
                <a href="http://www.codesexplorer.com">CodesExplorer Home</a>
            </div>
            <hr/>
            <br />
            <h3>${heading}</h3>
            <br/>
            <div>
                <h3>todays date ${date}   </h3>
            </div>
            <div>
                <p>
                   ${content}
                </p>
                <p>
                   ${content}
                </p>
            </div>
        </div>
    </body>
    
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
   counter = counter + 1 ; 
   res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){ // URL :/submit-name/?name=xxxx
  //Get the name from request object
  var name=req.query.name;
  
  names.push(name);
  /// JSON 
  res.send(JSON.stringify(names));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName',function (req,res) {
    
    var articleName=req.params.articleName; 
    res.send(createTemplate(articles[articleName]));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/abhay', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'abhay.html'));
});

app.get('/sitemap', function (req, res) {
  res.send('Sitemap is fetched and will be served');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
