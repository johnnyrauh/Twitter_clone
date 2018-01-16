// import { read } from 'fs';

const nunjucks = require('nunjucks')
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const routes = require('./routes');

app.use(morgan('dev'))
app.use('/', routes);
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{noCache: true}); // point nunjucks to the proper directory for templates

app.listen(3000, () => console.log('Example app listening on port 3000!'))


