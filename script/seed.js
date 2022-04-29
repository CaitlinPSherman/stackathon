const {
  db,
  models: { Image },
} = require('../server/db');

const images = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Naturalis_Biodiversity_Center_-_RMNH.AVES.154252_1_-_Acanthis_flammea_flammea_%28Linnaeus%2C_1758%29_-_Fringillidae_-_bird_skin_specimen.jpeg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80_%D0%A1%D0%B2%D0%B5%D1%82%D0%B5_%D0%9F%D0%B5%D1%82%D0%BA%D0%B5_%D1%83_%D0%91%D0%B8%D1%98%D0%B5%D1%99%D0%B8%D0%BD%D0%B8.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/086_Monument_als_M%C3%A0rtirs_de_la_Independ%C3%A8ncia%2C_enrajolat.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Hillock_-_panoramio.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/KleinB%C3%BCnzowBfNO.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Bangor_West_station_%283%29_-_geograph.org.uk_-_2869202.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/ChevroletCorvette_2.JPG',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Paran%C3%A1%2C_Entre_R%C3%ADos%2C_Argentina_-_panoramio_%28211%29.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Bowl_MET_wb-35.64.2.jpeg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Nearing_Brackwell_farm_-_geograph.org.uk_-_969861.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Bahnmeisterei_Malliss.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flux_Pavilion_%40_Spring_Awakening_6_14_2014_%2814463331416%29.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Rosa_%E2%80%9CPink_Parfait%E2%80%9D._01.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Kaysersberg_Tribunal.JPG',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/5th_SBCT%2C_2nd_ID_troops_conduct_patrol_in_Arghandab_River_Valley_DVIDS232728.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Once_in_a_blue_moon%2C_He_woke_up.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/2012-07_Grand_Canyon_National_Park_Science_%26_RM_Building_2060_%287492117730%29.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Salto_Juancho_-_panoramio.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/ISS043-E-242899_-_View_of_Earth.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Estaci%C3%B3n_de_Gadea_-_R%C3%ADo_Tinto.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/02019_0241_%282%29_Catholic_nationalists_block_gay_rigths_pride_march_in_Cz%C4%99stochowa%2C_TVP_Info.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Bus_61_in_Delft.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Line_dancers_in_their_natural_habitat_%28225633218%29.jpg/800px-Line_dancers_in_their_natural_habitat_%28225633218%29.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bald_eagle_on_log_at_Eastern_Neck_National_Wildlife_Refuge_%2834252289242%29.jpg/800px-Bald_eagle_on_log_at_Eastern_Neck_National_Wildlife_Refuge_%2834252289242%29.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Berlin-Tempelhof_-_UFA-Fabrik_-_geo.hlipp.de_-_32650.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Boat_in_Newquay_harbour_%285916%29.jpg/800px-Boat_in_Newquay_harbour_%285916%29.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ChineseLionDancing_Ashfield.jpg/800px-ChineseLionDancing_Ashfield.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Pozorrubio_de_Santiago_14.jpg/800px-Pozorrubio_de_Santiago_14.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/The_Mirage_Hotel_%287980816556%29.jpg/800px-The_Mirage_Hotel_%287980816556%29.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sparta%2CTN_caves_-_panoramio.jpg/800px-Sparta%2CTN_caves_-_panoramio.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_presenters_of_K%C3%B5igi_Eesti_Laul.jpg/800px-The_presenters_of_K%C3%B5igi_Eesti_Laul.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Costiera_amalfitana_-mix-_2019_by-RaBoe_781.jpg/800px-Costiera_amalfitana_-mix-_2019_by-RaBoe_781.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Locomoco_%287770124116%29.jpg/800px-Locomoco_%287770124116%29.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Fredrick_Potts_memorial%2C_Reading_%283%29.JPG/800px-Fredrick_Potts_memorial%2C_Reading_%283%29.JPG',
  },
];

async function seed() {
  try {
    await db.sync({ force: true });
    await Promise.all(
      images.map((img) => {
        return Image.create(img);
      })
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error(err);
      db.close();
    });
}
