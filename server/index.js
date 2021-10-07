const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const { reportReview, markHelpful, postNewReview, getReviewMeta, getReviews } = require('../database/index')

mongoose.Promise = global.Promise

app.use(express.json())
app.listen(port, () => {
  console.log('SDC server listening on port: ' + port)
})

// get reviews ** WORKS **
app.get('/reviews/', (req, res) => {
  const prodId = { product_id: Number(req.query.product_id) }
  getReviews(prodId, (err, reviewData) => {
    if (err) {
      res.status(404).send('Error getting reviews')
    } else {
      res.send(reviewData)
    }
  })
})

// post new review
app.post('/reviews/', (req, res) => {
  const postContent = req.body
  postNewReview(postContent, (err, response) => {
    if (err) {
      console.log('err in post: ', err)
      res.status(500).send('Failed to post')
    } else {
      console.log('response from post: ', response)
      res.send(response)
    }
  })
})

// get review meta data ** WORKS **
app.get('/reviews/meta/', (req, res) => {
  const prodId = { product_id: Number(req.query.product_id) }
  getReviewMeta(prodId, (err, reviewMetaData) => {
    if (err) {
      res.status(404).send('Error getting reviews meta data')
    } else {
      res.send(reviewMetaData)
    }
  })
})

// report review  ** WORKS **
app.put('/reviews/:review_id/report/', (req, res) => {
  const reviewId = { id: Number(req.params.review_id) }
  reportReview(reviewId, (err, apiRes) => {
    if (err) {
      res.status(404).send('Error getting reviews meta data')
    } else {
      res.status(204).send()
    }
  })
})

// mark review helpful ** WORKS **
app.put('/reviews/:review_id/helpful/', (req, res) => {
  const reviewId = { id: Number(req.params.review_id) }
  markHelpful(reviewId, (err, response) => {
    if (err) {
      res.status(404).send('Error getting reviews meta data')
    } else {
      console.log('response from helpful: ', response)
      res.status(204).send()
    }
  })
})
