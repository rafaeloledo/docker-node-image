const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!';

app.use( 
  bodyParser.urlencoded({
    extend:false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Hello");
});

app.listen(80);
