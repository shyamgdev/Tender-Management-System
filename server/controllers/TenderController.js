const { io } = require("../app");
const TenderModel = require("../models/Tender");


class TenderController {
  // GET ALL TENDERS
  static getTenders = async (req, res) => {
    try {
      const tenders = await TenderModel.find();
      res.status(200).json(tenders);
    } catch (error) {
      console.log(error.message);
      res
        .status(400)
        .json({ status: "failed", message: error.message });
    }
  };

  // GET SPECIFIC TENDERS BY ID
  static getTenderById = async (req, res) => {
    try {
      const tender = await TenderModel.findById(req.params.id).populate('bids');
      if (!tender) {
        return res.status(404).json({ message: 'Tender not found' });
      }
      res.status(200).json(tender);
    } catch (error) {
      console.log(error.message);
      res
        .status(400)
        .json({ status: "failed", message: error.message });
    }
  };

  // NEW TENDER
  static createTender = async (req, res) => {
    try {
      const { name, description, startTime, endTime, bufferTime } = req.body;
      const newTender = new TenderModel({ name, description, startTime, endTime, bufferTime });
      await newTender.save();
      res.status(201).json(newTender);
    } catch (error) {
      console.log(error.message);
      res
        .status(400)
        .json({ status: "failed", message: error.message });
    }
  };
}

module.exports = TenderController;