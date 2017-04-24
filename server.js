var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
//route to serve index.html
app.listen(3000, function () {
  console.log('server is up and running');
})
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  // send back index.html as response
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url
// route to calculate
app.post('/calculate', function (req, res) {
  console.log('calculate route hit:', req.body);
  switch (req.body.type) {
    case '+':
    var answer = parseInt(req.body.x) + parseInt(req.body.y);
    break;
    case '-':
    answer = parseInt(req.body.x) - parseInt(req.body.y);
    break;
    case '*':
    answer = parseInt(req.body.x) * parseInt(req.body.y);
    break;
    case '/':
    answer = parseInt(req.body.x) / parseInt(req.body.y);
    break;
    default:
    answer = "oops!"
} // end switch
var finalAnswer = {
  number:answer
}; // end finalAnswer
res.send(finalAnswer);
}) // end calculate route
