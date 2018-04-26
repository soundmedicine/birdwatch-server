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
        },
        {
          id: 2,
          commonName: 'Spiny Softshell Turtle',
          scientificName: 'Apalone spinifera',
          image:
            'http://www.reptilesofcolorado.com/uploads/8/8/8/5/8885924/2681868.jpg?905',
          fact:
            'This turtle gets its name from the cone-like projections on the leading edge of the carapace, which are not scutes (scales).',
          sightings: 0
        },
        {
          id: 3,
          commonName: 'Ornate Box Turtle',
          scientificName: 'Terrapene ornata',
          image:
            'http://www.reptilesofcolorado.com/uploads/8/8/8/5/8885924/8033796.jpg?904',
          fact:
            'Water is important for this turtle to regulate body temperature, and to replace body water after hibernation, but they do not spend large amounts of time in flowing or standing water.',
          sightings: 0
        },
        {
          id: 4,
          commonName: 'Snapping Turtle',
          scientificName: 'Chelydra serpentina',
          image:
            'http://www.reptilesofcolorado.com/uploads/8/8/8/5/8885924/5991661.jpg?903',
          fact:
            'This turtle gets its Latin name "serpentina" from its highly mobile head and neck, which resembles a snake.',
          sightings: 0
        },
        {
          id: 5,
          commonName: 'Yellow Mud Turtle',
          scientificName: 'Kinosternon flavescens',
          image:
            'http://www.reptilesofcolorado.com/uploads/8/8/8/5/8885924/2304499_orig.jpg',
          fact:
            'This turtle has a lifespan of 50 to 65 years, on an omnivorous diet including worms, crayfish, frogs, snails, fish and other aquatic insects and invertebrates.',
          sightings: 0
        }
      ];
      return knex('turtle').insert(turtles);
    });
};
