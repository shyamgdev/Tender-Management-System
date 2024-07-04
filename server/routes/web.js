const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');
const tenderController = require('../controllers/tenderController');

// TENDER CONTROLLER
router.post('/tender/new', tenderController.createTender);
router.get('/tenders', tenderController.getTenders);
router.get('/tender/:id', tenderController.getTenderById);

// BID CONTROLLER
router.post('/bid/new', bidController.createBid);
router.get('/bids/:tenderId', bidController.getBidsByTenderId);

module.exports = router;