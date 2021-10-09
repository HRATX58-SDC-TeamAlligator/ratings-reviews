const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/SDC')
  .then(() => {
    console.log('MongoDB connection successful!')
  })
  .catch(err => {
    console.error('Database connection error')
  })

const db = mongoose.connection
// continue to lissten for errors
db.on('error', err => {
  console.err(err)
})


// With Mongoose, everything is derived from a Schema
const reviewSchema = new Schema({
  id: Number,
  product_id: Number,
  review_id: Number,
  rating: Number,
  summary: String,
  recommend: Boolean,
  response: String,
  reported: Boolean,
  body: String,
  date: Number,
  reviewer_name: String,
  reviewer_email: String,
  helpfulness: Number
}, { collection: 'reviewCSV' })

const characteristicSchema = new Schema({
  name: String,
  value: Number
})

const ratingSchema = new Schema({
  product_id: Number,
  id: Number,
  name: String,
  rating: Object,
  values: [characteristicSchema]
}, { collection: 'characteristics' })

// {
//   "product_id": "2",
//   "ratings": {
//     2: 1,
//     3: 1,
//     4: 2,
//     // ...
//   },
//   "recommended": {
//     0: 5
//     // ...
//   },
//   "characteristics": {
//     "Size": {
//       "id": 14,
//       "value": "4.0000"
//     },
//     "Width": {
//       "id": 15,
//       "value": "3.5000"
//     },
//     "Comfort": {
//       "id": 16,
//       "value": "4.0000"
//     },
//     // ...
// }

// The next step is compiling our schema into a Model
const Review = mongoose.model('mergedReviews', reviewSchema)
const Rating = mongoose.model('characteristics', ratingSchema)
const Characteristic = mongoose.model('char', characteristicSchema)

//  // **** DB QUERIES *****

// get reviews from database
// do not include 'reported' reviews!
const getReviews = (productId, callback) => {
  Review.find(productId, (err, data) => {
    if (err) {
      console.log(`error getting data for ${productId} from db!`)
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

// get review meta data from db
const getReviewMeta = (productId, callback) => {
  Rating.find(productId, (err, data) => {
    if (err) {
      console.log(`error getting data for ${productId} from db!`)
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

// add a review to db
const postNewReview = (params, callback) => {
  console.log('post review data: ', params)

  const reviewParams = {
    product_id: params.product_id,
    rating: params.rating,
    date: Math.floor(Date.now() / 1000),
    summary: params.summary,
    body: params.body,
    recommend: params.body.recommend || false,
    reported: false,
    reviewer_name: params.name,
    reviewer_email: params.email,
    helpfulness: 0,
    response: 'null'
  }

  Review.create(reviewParams)
    .then((response) => {
      Rating.create(
        { values: params.characteristics, product_id: params.product_id }, {
          upsert: true
        })
      callback(null, response)
    })
    .catch((err) => {
      callback(err)
    })
}

// update a review as helpful in db
const markHelpful = (reviewId, callback) => {
  Review.updateOne(reviewId, { $inc: { helpfulness: 1 } }, function (err, data) {
    if (err) {
      console.log('there was an error adding a review to the db! ', err)
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

// report a review as in db
const reportReview = (reviewId, callback) => {
  Review.updateOne(reviewId, { $set: { reported: true } }, function (err, data) {
    if (err) {
      console.log('there was an error adding a review to the db! ', err)
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

module.exports = { reportReview, markHelpful, postNewReview, getReviewMeta, getReviews }
