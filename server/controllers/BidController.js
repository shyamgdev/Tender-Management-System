const BidModel = require("../models/Bid");
const TenderModel = require("../models/Tender");
const UserModel = require("../models/User");


class BidController {
  // GET ALL BIDS
  static getAllBids = async (req, res) => {
    try {
      const bids = await BidModel.find().populate("user").sort({ bidCost: 1 });
      res.status(200).json(bids);
    } catch (error) {
      console.log(error.message);
      res
        .status(400)
        .json({ status: "failed", message: error.message });
    }
  };

  // GET BIDS BY TENDER ID
  static getBidsByTenderId = async (req, res) => {
    try {
      const bids = await BidModel.find({ tender: req.params.tenderId }).populate("user").sort({ bidCost: 1 });
      if (!bids) {
        return res.status(404).json({ message: 'Bid not found' });
      }
      res.status(200).json(bids);
    } catch (error) {
      console.log(error.message);
      res
        .status(400)
        .json({ status: "failed", message: error.message });
    }
  };

  // GET LOWEST BID BY TENDER ID
  static getLowestBid = async (req, res) => {
    try {
      const bids = await BidModel.findOne({ tender: req.params.tenderId }).sort({ bidCost: 1 });
      res.status(200).json(bids);
    } catch (error) {
      console.log(error.message);
      res
        .status(400)
        .json({ status: "failed", message: error.message });
    }
  };

  // NEW BID
  static createBid = async (req, res) => {
    try {
      const { companyName, bidCost, tenderId, userId } = req.body;
      // const bid = await BidModel.find({ companyName: companyName, tender: tenderId });
      // console.log(bid);
      // if (bid) {
      //   throw new Error(`${companyName} already submit a bid for this tender.`);
      // }
      const tender = await TenderModel.findById(tenderId);

      if (!tender) {
        return res.status(404).json({ message: 'Tender not found' });
      }

      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const bidTime = new Date();
      const placedInLastFiveMinutes = (tender.endTime - bidTime) <= 5 * 60 * 1000;

      const newBid = new BidModel({ companyName, bidCost, tender: tenderId, user: userId, placedInLastFiveMinutes });
      await newBid.save();

      if (placedInLastFiveMinutes) {
        tender.endTime = new Date(tender.endTime.getTime() + tender.bufferTime * 60 * 1000);
        await tender.save();
      }

      // Emit a notification to all connected clients
      // const io = req.app.get('io');
      // io.emit('notification', { message: `Tender ${tender.name} has been extended due to a last-minute bid.` });

      res.status(201).json(newBid);
    } catch (error) {
      console.log(error.message);
      res
        .status(400)
        .json({ status: "failed", message: error.message });
    }
  };
}

module.exports = BidController;