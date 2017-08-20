var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title:'Abhay kagalkar Page',
    date:'August 20,2017',
    heading:'Article One',
    content: `This is a Web Page of our site Made from imad.hasura-app.io,This is a Web Page of our site Made from imad.hasura-app.io,This is a Web Page of our site Made from imad.hasura-app.io,v,vvvvThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.ioThis is a Web Page of our site Made from imad.hasura-app.io`
    
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
        <style>
            .container{
                max-width=800px;
                margin=auto;
                color=grey;
                font-family=sans-serif;
            }
        </style>
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/codesexplorer',function (req,res) {
    res.send(createTemplate(articleOne));
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
