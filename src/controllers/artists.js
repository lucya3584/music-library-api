const Artist = require('../models/artist');

exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });

  artist.save().then(() => {
    res.status(201).json(artist);
  });
};
exports.list = (req, res) => {
  Artist.find({}, (err, artists) => {
    res.status(200).send(artists);
  });
};
exports.find = (req, res) => {
  Artist.findOne({ _id: req.params.id }, (err, artist) => {
    res.status(200).json(artist);
  });
};
exports.patch = (req, res) => {
  Artist.findOne({ _id: req.params.id }, (_, artist) => {
    artist.set(req.body);
    artist.save().then(updatedArtist => {
      res.status(200).json(updatedArtist);
    });
  });
};
exports.delete = (req, res) => {
  Artist.findOneAndDelete({ _id: req.params.artistId }, (err, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(204).json(artist);
    }
  });
};
