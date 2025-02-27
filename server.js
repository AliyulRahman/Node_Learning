var http = require('http');
const url = require('url');
const {convertCase} = require('./libs/CaseConvertor')


const port = 8000

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  const parsedUrl = url.parse(req.url, true)
  const queryParams = parsedUrl.query;

  if (parsedUrl.pathname == '/FileHandling') {

  }
  

  else if (parsedUrl.pathname == '/Cluster') {
    
  }

  else if (parsedUrl.pathname == '/os') {
    
  }

  else if (parsedUrl.pathname == '/caseConvertor') {
    const inputText = queryParams?.inputText;
    const inputType = queryParams?.inputType;

    convertCase(inputText,inputType, function(error,result) {
        if (error) {
          res.write(error)
        }
        else
          res.write(result)
    })
  }

  else {
    res.write('Page Not Found')
  }

  res.end();
});

server.listen(port,function(error,response){
    console.log(`Your server has been started and your port number is ${port}`)
});