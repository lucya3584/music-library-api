const express = require('express');
const artistControllers = require('./controllers/artists.js');

const app = express();
app.use(express.json());

app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
app.get('/artists/:id', artistControllers.find);
app.patch('/artists/:id', artistControllers.patch);
app.delete('/artists/:artistId', artistControllers.delete);

app.post('/artists/:artistId/albums', albumControllers.create);
app.get('/artists/:artistId/albums', albumControllers.list);
app.patch('/artists/:artistId/albums/:albumId', albumControllers.patch);
app.delete('/artists/:artistId/albums/:albumId', albumControllers.delete);
app.post('/albums/:albumId/song', songControllers.create);

module.exports = app;
