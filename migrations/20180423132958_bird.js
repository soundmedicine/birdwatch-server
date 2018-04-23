
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bird', table => {
      table.increments('id').primary()
      table.text('commonName')
      table.text('scientificName')
      table.string('image', 300)
      table.text('fact'),
      table.integer('sightings')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wildwatch')
};
