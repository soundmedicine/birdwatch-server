exports.seed = function(knex, Promise) {
  return knex
    .raw('DELETE FROM "turtle"; ALTER SEQUENCE turtle_id_seq RESTART WITH 6;')
    .then(function() {
      let turtles = [
        {
          id: 1,
          commonName: 'Western Painted Turtle',
          scientificName: 'Chrysemys picta',
          image:
            'http://www.reptilesofcolorado.com/uploads/8/8/8/5/8885924/8594188.jpg?907',
          fact:
            'Fossils show that this genus of turtle existed 15 million years ago.',
          sightings: 0
        
        }]
      return knex('turtle').insert(turtles)
    })
}
