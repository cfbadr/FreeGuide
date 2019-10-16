const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlacesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  pictureUrl: {
    type: String,
    required: true
  },
  artwork: [{
    title: "",
    description: "",
    pictureUrl: "",
    wikipediaLink: "",
    type: "",
    dateOfArtwork: "",
    artist: "",
  }]

});

module.exports = Places = mongoose.model('place', PlacesSchema);
