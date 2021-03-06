var mongoose = require('mongoose');

var postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    body: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);
