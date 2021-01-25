const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect();
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    more: String,
    img: String
});
var bookdata = mongoose.model('bookdata',bookSchema);
module.exports=bookdata;