const mongoose = require('mongoose')

const listItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = listItemSchema
