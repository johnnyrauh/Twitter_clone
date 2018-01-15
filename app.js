const express = require( 'express' );
const app = express(); // creates an instance of an express application


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.use(function (req, res, next ) {
  // do your logging here
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding

})

