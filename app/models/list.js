const mongoose = require('mongoose')

const listItemSchema = require('./listItem')

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  listItems: [listItemSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('List', listSchema)
