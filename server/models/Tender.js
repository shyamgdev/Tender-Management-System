// models/Tender.js
const mongoose = require('mongoose');

const TenderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  bufferTime: {
    type: Number,
    required: true
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
}, { timestamps: true });

const TenderModel = mongoose.model('tender', TenderSchema);

module.exports = TenderModel;