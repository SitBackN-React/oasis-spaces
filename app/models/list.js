const mongoose = require('mongoose')

const itemSchema = require('./list')

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
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
