const { Schema, model } = require('mongoose');


const savedWordSchema = new Schema({
  term: String,
  type: String,
  term2: String,
  type2: String,
  examples: {type: Array, default: []}
});

const SavedWord = model('SavedWord', savedWordSchema);

module.exports = SavedWord;
