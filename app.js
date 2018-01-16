// import { read } from 'fs';

const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');

app.use(morgan('dev'))
 // do your logging here
  // morgan('dev')
  // call `n ext`, or else your app will be a black hole — receiving requests but never properly responding
// )

app.get('/', (req, res) => res.send('Hello World!')) // registering a listener for a current event

app.listen(3000, () => console.log('Example app listening on port 3000!'))


