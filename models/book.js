const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    authors: [String],
    description: String,
    img: {
        type: {String},
    },
    link: {
        type: String,
    }
});

const book = mongoose.model("book", BookSchema);
module.exports = book;