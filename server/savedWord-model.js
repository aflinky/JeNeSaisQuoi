const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/solo');

const savedWordSchema = new Schema({
  term: String,
  type: String,
  term2: String,
  type2: String,
  examples: Array
});


const SavedWord = mongoose.model('SavedWord', savedWordSchema);

module.exports = SavedWord;
