const express = require('express')
const passport = require('passport')
const router = express.Router()

const List = require('./../models/list')

const customErrors = require('./../../lib/custom_errors')
const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

// CREATE new item info
router.post('/lists/:listId', requireToken, (req, res, next) => {
  req.body.item.owner = req.user.id
  const itemData = req.body.item
  const listId = req.params.listId

  List.findById(listId)
    .then(handle404)
    .then(list => {
      list.items.push(itemData)
      return list.save()
    })
    .then(list => res.status(201).json({list: list}))
    .catch(next)
})
module.exports = router

// SHOW show one item
router.get('/lists/:listId/items/:itemId', requireToken, (req, res, next) => {
  const listId = req.params.listId
  const itemId = req.params.itemId
  List.findById(listId)
    .then(handle404)
    .then(list => {
      let item = list.items.id(itemId)
      item = handle404(item)
      res.status(200).json({item: item})
    })
    .catch(next)
})

// UPDATE item info
router.patch('/lists/:listId/items/:itemId', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.item.owner

  const itemId = req.params.itemId
  const itemData = req.body.item
  const listId = req.params.listId

  List.findById(listId)
    .then(handle404)
    .then(list => {
      requireOwnership(req, list)
      list.items.id(itemId).set(itemData)
      return list.save()
    })
    .then(list => res.status(200).json({list: list}))
    .catch(next)
})

// DELETE single item
router.delete('/lists/:listId/items/:itemId', requireToken, (req, res, next) => {
  const listId = req.params.listId
  // const itemData = req.body.item
  const itemId = req.params.itemId

  List.findById(listId)
    .then(handle404)
    .then(list => {
      requireOwnership(req, list)
      list.items.id(itemId).remove()
      return list.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router
