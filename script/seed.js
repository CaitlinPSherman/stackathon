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
