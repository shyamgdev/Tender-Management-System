const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');
const tenderController = require('../controllers/tenderController');
const UserController = require('../controllers/UserControllers');

// USER CONTROLLER
router.post('/auth/register', UserController.register);
router.post('/auth/login', UserController.login);

// TENDER CONTROLLER
router.post('/tender/new', tenderController.createTender);
router.get('/getTenders', tenderController.getTenders);
router.get('/getAvailableTenders', tenderController.getAvailableTenders);
router.get('/tender/:id', tenderController.getTenderById);

// BID CONTROLLER
router.post('/bid/new', bidController.createBid);
router.get('/bids', bidController.getAllBids);
router.get('/bids/:tenderId', bidController.getBidsByTenderId);
router.get('/lowestBid/:tenderId', bidController.getLowestBid);

module.exports = router;