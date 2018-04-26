
exports.seed = function(knex, Promise) {
  
  return knex.raw('DELETE FROM "bird"; ALTER SEQUENCE bird_id_seq RESTART WITH 6;')
    .then(function () {
      let birds = [{
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
        }]
      return knex('bird').insert(birds);
    });
};
