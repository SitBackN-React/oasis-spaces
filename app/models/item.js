const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  note: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = itemSchema
