
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
        image: 'https://i.pinimg.com/originals/ce/4f/b2/ce4fb2c602d059d4f7adec3015162a6c.jpg',
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
        }, {
        id: 6,
        commonName: 'Bufflehead',
        scientificName: 'Bucephala albeola',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/63905201-480px.jpg',
        fact: 'Bufflehead nest in old woodpecker holes, particularly those made by Northern Flickers.',
        sightings: 0
        }, {
        id: 7,
        commonName: 'Wood Duck',
        scientificName: 'Aix sponsa',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/65533521-480px.jpg',
        fact: 'Wood ducks are one of the few duck species equipped with strong claws that can grip bark and perch on branches.',
        sightings: 0
        }, {
        id: 8,
        commonName: 'Cinnamon Teal',
        scientificName: 'Spatula cyanoptera',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60310501-480px.jpg',
        fact: 'This duck is found in ponds throughout the American West, including parts of Canada and much of Mexico.',
        sightings: 0
        }, {
        id: 9,
        commonName: 'American Wigeon',
        scientificName: 'Mareca americana',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60017891-480px.jpg',
        fact: 'These ducks pluck plants with their short gooselike bills from the surface of the water.',
        sightings: 0
        }, {
        id: 10,
        commonName: 'Northern Pintail',
        scientificName: 'Anas acuta',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/63892991-480px.jpg',
        fact: 'These ducks head to the prairie pothole region of the Great Plains to nest as soon as the ice breaks up.',
        sightings: 0
        },{
        id: 11,
        commonName: 'Green-winged Teal',
        scientificName: 'Anas crecca',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/63893401-480px.jpg',
        fact: 'This is the smallest dabbling duck in North America.',
        sightings: 0
        },{
        id: 12,
        commonName: 'American Avocet',
        scientificName: 'Recurvirostra americana',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/64807071-480px.jpg',
        fact: 'This bird swings its long, up-turned bill through the shallow water to catch small invertebrates.',
        sightings: 0
        },{
        id: 13,
        commonName: 'Double-Crested Cormorant',
        scientificName: 'Phalacrocorax auritus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/66027281-480px.jpg',
        fact: 'These birds, related to frigatebirds and boobies, are experts at diving to catch small fish, and have solid, heavy bones.',
        sightings: 0
        },{
        id: 14,
        commonName: 'Great Blue Heron',
        scientificName: 'Ardea herodias',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60314201-480px.jpg',
        fact: 'This heron can strike like lightning to grab fish or snap up gophers.',
        sightings: 0
        },{
        id: 15,
        commonName: 'Black-Crowned Night Heron',
        scientificName: 'Nycticorax nycticorax',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/70693031-480px.jpg',
        fact: 'These birds are most active at night or at dusk.',
        sightings: 0
        },{
        id: 16,
        commonName: 'Great Egret',
        scientificName: 'Ardea alba',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/70610211-480px.jpg',
        fact: 'Great egrets were hunted nearly to extinction for their plumes in the late nineteenth century.',
        sightings: 0
        },{
        id: 17,
        commonName: 'Spotted Sandpiper',
        scientificName: 'Actitis macularius',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/64833231-480px.jpg',
        fact: 'These birds have intriguing social lives in which females take the lead and males raise the young.',
        sightings: 0
        },{
        id: 18,
        commonName: 'White-Faced Ibis',
        scientificName: 'Plegadis chihi',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/70695751-480px.jpg',
        fact: 'The White-faced ibis is a Western counterpart for the Glossy ibis, different only in coloring of the face and legs.',
        sightings: 0
        },{
        id: 19,
        commonName: 'Turkey Vulture',
        scientificName: 'Cathartes aura',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60317221-480px.jpg',
        fact: 'These birds ride thermals in the sky and use their keen sense of smell to find fresh carcasses.',
        sightings: 0
        },{
        id: 20,
        commonName: 'Osprey',
        scientificName: 'Pandion haliaetus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60320581-480px.jpg',
        fact: 'Osprey are unique among North American raptors for their diet of live fish, and ability to dive into water to catch them.',
        sightings: 0
        },{
        id: 21,
        commonName: 'American Kestrel',
        scientificName: 'Falco sparverius',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/70583881-480px.jpg',
        fact: 'The American kestrel is North America\'s littlest falcon, and one of the most colorful of all raptors.',
        sightings: 0
        },{
        id: 22,
        commonName: 'Cooper\'s Hawk',
        scientificName: 'Accipiter cooperii',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60324921-480px.jpg',
        fact: 'These birds are among the bird world\'s most skillful fliers, often in pursuit of other birds to eat.',
        sightings: 0
        },{
        id: 23,
        commonName: 'Swainson\'s Hawk',
        scientificName: 'Buteo swainsoni',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/71544711-480px.jpg',
        fact: 'These hawks hunt rodents while flying, or even run after insects on the ground.',
        sightings: 0
        },{
        id: 24,
        commonName: 'Red-Tailed Hawk',
        scientificName: 'Buteo jamaicensis',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60384911-480px.jpg',
        fact: 'This is probably the most common hawk in North America, feeding mainly on voles and rabbits.',
        sightings: 0
        },{
        id: 25,
        commonName: 'American Coot',
        scientificName: 'Fulica americana',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/71547131-480px.jpg',
        fact: 'These birds look like ducks and often mix in with them, but they are closer relatives of the Sandhill Crane.',
        sightings: 0
        },{
        id: 26,
        commonName: 'Killdeer',
        scientificName: 'Charadrius vociferus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/64809651-480px.jpg',
        fact: 'Their name comes from the call they make, common after dark.',
        sightings: 0
        },{
        id: 27,
        commonName: 'Lesser Yellowlegs',
        scientificName: 'Tringa flavipes',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/64838631-480px.jpg',
        fact: 'This bird often runs through shallow water to chase its prey.',
        sightings: 0
        },{
        id: 28,
        commonName: 'Ring-Billed Gull',
        scientificName: 'Larus delawarensis',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/71316071-480px.jpg',
        fact: 'These are the gulls you will most likely see far away from coastal areas.',
        sightings: 0
        },{
        id: 29,
        commonName: 'Rock Pigeon',
        scientificName: 'Columba livia',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/66031271-480px.jpg',
        fact: 'This bird was introduced to North America from Europe in the early 1600s.',
        sightings: 0
        },{
        id: 30,
        commonName: 'Eurasian Collared-Dove',
        scientificName: 'Streptopelia decaocto',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/66035091-480px.jpg',
        fact: 'This relative of the Mourning Dove gets its name from the black half-collar at the nape of the neck.',
        sightings: 0
        },{
        id: 31,
        commonName: 'Mourning Dove',
        scientificName: 'Zenaida macroura',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60386921-480px.jpg',
        fact: 'When taking off for flight, their wings make a sharp whistling or whinnying sound. They are the most frequently hunted species in North America.',
        sightings: 0
        },{
        id: 32,
        commonName: 'Downy Woodpecker',
        scientificName: 'Picoides pubescens',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60397891-480px.jpg',
        fact: 'These woodpeckers often join flocks of chickadees and nuthatches, barely outsizing them.',
        sightings: 0
        },{
        id: 33,
        commonName: 'Northern Flicker',
        scientificName: 'Colaptes auratus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60403261-480px.jpg',
        fact: 'Flickers mainly eat ants and beetles, digging for them with their unusual, slightly curved bill.',
        sightings: 0
        },{
        id: 34,
        commonName: 'Say\'s Phoebe',
        scientificName: 'Sayornis saya',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/65681771-480px.jpg',
        fact: 'These birds will catch insects in midair or pounce on them on the ground.',
        sightings: 0
        },{
        id: 35,
        commonName: 'Belted Kingfisher',
        scientificName: 'Megaceryle alcyon',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/65764771-480px.jpg',
        fact: 'This bird nests in burrows along earthen banks and feeds almost entirely on aquatic prey, diving to catch fish and crayfish.',
        sightings: 0
        },{
        id: 36,
        commonName: 'Blue Jay',
        scientificName: 'Cyanocitta cristata',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/59859171-480px.jpg',
        fact: 'Blue Jays are known for their intelligence and complex social systems with tight family bonds.',
        sightings: 0
        },{
        id: 37,
        commonName: 'Black-Billed Magpie',
        scientificName: 'Pica hudsonia',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/70580971-480px.jpg',
        fact: 'This bird is a large, flashy relative of jays and crows.',
        sightings: 0
        },{
        id: 38,
        commonName: 'American Crow',
        scientificName: 'Corvus brachyrhynchos',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/59858041-480px.jpg',
        fact: 'This crow\'s flight is unique, with methodical flapping that is rarely broken up with glides.',
        sightings: 0
        },{
        id: 39,
        commonName: 'Common Raven',
        scientificName: 'Corvus corax',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/63739541-480px.jpg',
        fact: 'Ravens are among the smartest of all birds.',
        sightings: 0
        },{
        id: 40,
        commonName: 'Northern Rough-Winged Swallow',
        scientificName: 'Stelgidopteryx serripennis',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/68280781-480px.jpg',
        fact: 'This bird nests in burrows excavated by other birds and mammals, spending its winters in Mexico and Central America.',
        sightings: 0
        },{
        id: 41,
        commonName: 'Tree Swallow',
        scientificName: 'Tachyncineta bicolor',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/68280061-480px.jpg',
        fact: 'Tree Swallows nest in tree cavities, but will also readily move into nest boxes.',
        sightings: 0
        },{
        id: 42,
        commonName: 'Black-Capped Chickadee',
        scientificName: 'Poecile atricapillus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60411301-480px.jpg',
        fact: 'Its habit of investigating people and everything else in its home territory make it one of the first birds most people learn.',
        sightings: 0
        },{
        id: 43,
        commonName: 'Bushtit',
        scientificName: 'PSaltriparus minimus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/68041721-480px.jpg',
        fact: 'These birds often hang upside-down to pick at insects or spiders on the undersides of leaves.',
        sightings: 0
        },{
        id: 44,
        commonName: 'House Wren',
        scientificName: 'Troglodytes aedon',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/59860711-480px.jpg',
        fact: 'You may find their twig-filled nests in old cans, boots, or boxes lying around in your garage.',
        sightings: 0
        },{
        id: 45,
        commonName: 'American Robin',
        scientificName: 'Turdus migratorius',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/60412911-480px.jpg',
        fact: 'You can often see this bird tugging earthworms out of the ground.',
        sightings: 0
        },{
        id: 46,
        commonName: 'European Starling',
        scientificName: 'Sturnus vulgaris',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/67454961-480px.jpg',
        fact: 'These birds are covered in white spots during winter, but turn dark and glossy in summer.',
        sightings: 0
        },{
        id: 47,
        commonName: 'Orange-Crowned Warbler',
        scientificName: 'Oreothlypis celata',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/64441211-480px.jpg',
        fact: 'There is rarely any sign of their orange crown, which is usually only visible when the bird is excited and raises its head feathers.',
        sightings: 0
        },{
        id: 48,
        commonName: 'Spotted Towhee',
        scientificName: 'Pipilo maculatus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/64991441-480px.jpg',
        fact: 'Their warm rufous flanks match the dry leaves they spend their time hopping around in.',
        sightings: 0
        },{
        id: 49,
        commonName: 'Red-Winged Blackbird',
        scientificName: 'Agelaius phoeniceus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/63744251-480px.jpg',
        fact: 'Males have scarlet-and-yellow shoulder patches they can puff up or hide, depending on how confident they feel.',
        sightings: 0
        },{
        id: 50,
        commonName: 'House Finch',
        scientificName: 'Haemorhous mexicanus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/63736771-480px.jpg',
        fact: 'This bird is a recent introduction from Western into Eastern North America, including Hawaii.',
        sightings: 0
        },{
        id: 51,
        commonName: 'American Goldfinch',
        scientificName: 'Spinus tristis',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/63737371-480px.jpg',
        fact: 'This is the state bird of New Jersey, Iowa, and Washington.',
        sightings: 0
        },{
        id: 52,
        commonName: 'Common Grackle',
        scientificName: 'Quiscalus quiscula',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/67364561-480px.jpg',
        fact: 'Grackles eat many crops, especially corn.',
        sightings: 0
        },{
        id: 53,
        commonName: 'Eastern Kingbird',
        scientificName: 'Tyrannus tyrannus',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/65684501-480px.jpg',
        fact: 'This bird winters in South American forests, where it eats mainly fruit.',
        sightings: 0
        },{
        id: 54,
        commonName: 'Blue-Gray Gnatcatcher',
        scientificName: 'Polioptila caerulea',
        image: 'https://s3.amazonaws.com/com-aab-media/photo/68033861-480px.jpg',
        fact: 'This bird will mix snippets of other birds\' songs into its own.',
        sightings: 0
        }]
      return knex('bird').insert(birds);
    });
};
