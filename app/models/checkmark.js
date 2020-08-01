const mongoose = require('mongoose')

const checkmarkSchema = new mongoose.Schema({
  checkmark: {
    type: Boolean,
    default: false
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
    required: true
  }

})

module.exports = checkmarkSchema
