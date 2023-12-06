// const { date, String } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BilletTc = require("./billetTc");
const BilletSchema = new mongoose.Schema({
  sectionSize: String,
  gradeName: {
    type: String,
    uppercase: true,
  },
  heatNo: {
    type: String,
    uppercase: true,
    unique: true,
    ref: "BilletTc",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  productionDate: { type: Date, default: Date.now() },

  c: Number,
  mn: Number,
  p: Number,
  s: Number,
  si: Number,
  cr: Number,
  mo: Number,
  ni: Number,
  al: Number,
  cu: Number,
  v: Number,
  ce: Number,
  fullLengthQty: Number,
  fullPisLength: Number,
  shortLengthQty: Number,
  shortPisLength: [Number],
});
BilletSchema.virtual("formattedDate").get(function () {
  return this.createdAt.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
});

BilletSchema.virtual("formattedPoDate").get(function () {
  return this.productionDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
});
module.exports = mongoose.model("BilletList", BilletSchema);
// module.exports = mongoose.SchemaTypes("billetList", BilletSchema);
// module.exports.productionDate = BilletSchema;
