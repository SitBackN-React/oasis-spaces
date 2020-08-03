
const mongoose = require('mongoose')

const itemSchema = require('./item')

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  checkmark: {
    type: Boolean,
    default: false
  },
  items: [itemSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('List', listSchema)
