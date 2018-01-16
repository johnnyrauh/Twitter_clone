// import { read } from 'fs';
const nunjucks = require('nunjucks')
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{noCache: true}); // point nunjucks to the proper directory for templates

app.use(morgan('dev'))
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

// app.get('/', (req, res) => res.render( 'index', {title: 'Hall of Fame', people: people} )) // registering a listener for a current event

app.listen(3000, () => console.log('Example app listening on port 3000!'))

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

//nunjucks.configure('views', {noCache: true});

app.get('/', (req, res) => res.render( 'index.html', locals ))

nunjucks.render('index.html', locals, function (err, output) {

});

