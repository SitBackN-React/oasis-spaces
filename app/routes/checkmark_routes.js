const express = require('express')
// const passport = require('passport')
// const List = require('./../models/list')
const Checkmark = require('./../models/checkmark')
// const customErrors = require('../../lib/custom_errors')

// const requireOwnership = customErrors.requireOwnership
// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
// const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// PATCH for checkmark
router.patch('/checkmark', removeBlanks, (req, res, next) => {
  // delete req.body.list = req.list.id
  Checkmark.findById({'owner': req.list.id})
    .then(checkmark => {
      return checkmark.updateOne(req.body.checkmark)
    })
    .then(checkmark => res.sendStatus(204).json({ checkmark: checkmark }))
    .catch(next)
})

module.exports = router
