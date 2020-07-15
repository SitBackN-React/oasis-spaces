const express = require('express')
const passport = require('passport')
const List = require('./../models/list')
const customErrors = require('../../lib/custom_errors')
// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
// const requireOwnership = customErrors.requireOwnership
// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
// const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /list
router.get('/lists', requireToken, (req, res, next) => {
  List.find({'owner': req.user.id})
    .populate('list')
    .then(list => {
      return list.map(list => list.toObject())
    })
    .then(list => res.status(200).json({ list: list }))
    .catch(next)
})

// CREATE
// POST /list/
router.post('/lists', requireToken, (req, res, next) => {
  req.body.list.owner = req.user.id
  List.create(req.body.list)
    .then(list => {
      res.status(201).json({ list: list.toObject() })
    })
    .catch(next)
})
// SHOW
// GET /list/:id
router.get('/lists/:id', requireToken, (req, res, next) => {
  List.findById(req.params.id)
    .then(handle404)
    .then(list => res.status(200).json({ list: list.toObject() }))
    .catch(next)
})

module.exports = router
