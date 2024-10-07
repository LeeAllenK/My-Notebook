const mongoose = require('mongoose')

const noteBookSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Note', noteBookSchema)
