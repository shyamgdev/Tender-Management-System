// models/Bid.js
const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  bidTime: {
    type: Date,
    default: Date.now
  },
  bidCost: {
    type: Number,
    required: true
  },
  tender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tender',
    required: true
  },
  placedInLastFiveMinutes: {
    type: Boolean,
    default: false
  }
});


// // Pre-save middleware to set the companyNameLower field
// BidSchema.pre('save', function (next) {
//   try {
//     if (this.isModified('companyName')) {
//       const bid = BidModel.find({ companyName: { $regex: this.companyName, $options: "i" }, tender: this.tender });
//       console.log(bid);
//       if (!bid) {
//         next();
//       }
//     }
//     throw new Error(`${this.companyName} already submit a bid for this tender.`);
//   } catch (error) {
//     console.log(error.message);
//     next(error);
//   }
// });


const BidModel = mongoose.model('bid', BidSchema);

module.exports = BidModel;
