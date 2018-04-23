const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

// Create an express app
const app = express()

// Setup logger middleware
app.use(morgan('tiny'))
// Setup cors middleware
app.use(cors())

// When a GET request is received to the path /
app.get('/birds', (req, res) => {
  // Send a JSON response
  res.json([{
    id: 1,
    commonName: 'Canada Goose',
    scientificName: 'Branta canadensis',
    image: 'http://cpw.state.co.us/PublishingImages/WildlifeSpecies/SPList/CanadaGoose01.jpg',
    fact: 'Both parents care for the goslings and the family remains together during migration and through the winter.',
    sightings: 0
  }, {
    id: 2,
    commonName: 'Blue-Winged Teal',
    scientificName: 'Spatula discors',
    image: 'https://s3.amazonaws.com/com-aab-media/photo/60292801-720px.jpg',
    fact:'Blue-winged Teal are long distance migrants, with some birds heading all the way to South America for the winter.',
    sightings: 0
  }, {
    id: 3,
    commonName: 'Northern Shoveler',
    scientificName: 'Spatula clypeata',
    image: 'https://www.allaboutbirds.org/guide/Northern_Shoveler/media-browser/60312481',
    fact: 'The Northern Shoveler busily forages head down in shallow wetlands. Its uniquely shaped bill has comblike projections along its edges, which filter out tiny crustaceans and seeds from the water.',
    sightings: 0
  }, {
    id: 4,
    commonName: 'Gadwall',
    scientificName: 'Mareca strepera',
    image: 'https://s3.amazonaws.com/com-aab-media/photo/65533461-720px.jpg',
    fact: 'We don’t tend to think of ducks as pirates, but Gadwall often snatch food from diving ducks as they surface.',
    sightings: 0
  }, {
    id: 5,
    commonName: 'Mallard',
    scientificName: 'Anas platyrhynchos',
    image: 'https://s3.amazonaws.com/com-aab-media/photo/60021841-720px.jpg',
    fact: 'Mallards have long been hunted for food, and almost all domestic ducks come from this species.',
    sightings: 0
  }])
})

// Not Found (404) handler
app.use((req, res, next) => {
  // Set the response status code
  res.status(404)
  const error = new Error('Not Found. 🔍')
  // Forward the error to the error handler
  next(error);
});

// Error handler
app.use((error, req, res, next) => {
  res.status(res.statusCode || 500)
  res.json({
    message: error.message,
    error: error.stack
  });
});

// Set the PORT to listen on
const port = process.env.PORT || 3000
// Listen on the port
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})