const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');

// create Schema class
const Schema = mongoose.Schema;

// create note schema
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  // date is set when added to database
  authors: [String],
  description: String,
    img: {
        type: {String},
    },
    link: {
        type: String,
    }
});

// add unique-validator plugin
BookSchema.plugin(uniqueValidator);

// create the Note model with the NoteSchema
const Book = mongoose.model("Book", BookSchema);

// export the model
module.exports = Book;