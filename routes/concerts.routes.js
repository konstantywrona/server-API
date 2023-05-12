const express = require('express');

const ConcertControlller = require('../controllers/concerts.controller');

const router = express.Router();

router.get('/concerts', ConcertControlller.getAllConcerts);
router.get('/concerts/random', ConcertControlller.getRandomConcert);
router.get('/concerts/:id', ConcertControlller.getConcertById);
router.post('/concerts', ConcertControlller.createConcert);
router.put('/concerts/:id', ConcertControlller.updateConcert);
router.delete('/concerts/:id', ConcertControlller.deleteConcert);

module.exports = router;
