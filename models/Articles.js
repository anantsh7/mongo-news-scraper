const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  artist: {
    type: String
  },
  album: {
    type: String,
  },
  artwork: {
    type: String
  },
  url: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comments'
    }
  ]
})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article