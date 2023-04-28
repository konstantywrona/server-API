const express = require('express');
const uuid = require('uuid').v4;
const db = require('../db.js');

const router = express.Router();

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats/random').get((req, res) => {
  res.json(db.seats[Math.floor(Math.random() * db.seats.length)]);
});

router.route('/seats/:id').get((req, res) => {
  res.json(db.seats.find((seat) => seat.id == req.params.id));
});

router.route('/seats').post((req, res) => {
  const { author, text } = req.body;
  const id = uuid();
  const newSeats = { id: id, author: author, text: text };
  db.seats.push(newSeats);
  res.json({ message: 'ok!' });
});

router.route('/seats/:id').put((req, res) => {
  const { author, text } = req.body;
  const id = +req.params.id;
  const seats = db.seats.find((data) => data.id === id);
  const index = db.seats.indexOf(seats);
  const changeSeats = {
    id: id,
    author: author,
    text: text,
  };
  db.seats[index] = changeSeats;
  res.json({ message: 'ok!' });
});

router.route('/seats/:id').delete((req, res) => {
  const element = db.seats.find((data) => data.id == req.params.id);
  const index = db.seats.indexOf(element);

  db.seats.splice(index, 1);
  res.json({ message: 'ok' });
});

module.exports = router;
