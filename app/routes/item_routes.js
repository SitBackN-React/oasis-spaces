const express = require('express')
const passport = require('passport')
const router = express.Router()

const List = require('./../models/list')

const customErrors = require('./../../lib/custom_errors')
const handle404 = customErrors.handle404

// const requireOwnership = customErrors.requireOwnership
//
// const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

// CREATE new item info
router.post('/items', requireToken, (req, res, next) => {
  req.body.item.owner = req.user.id
  const itemData = req.body.item
  const listId = itemData.listId

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
