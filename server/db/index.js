//this is the access point for all things database related!

const db = require('./db')

const Image = require('./models/Image')

//associations could go here!

module.exports = {
  db,
  models: {
    Image,
  },
}
