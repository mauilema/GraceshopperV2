const router = require('express').Router()
const { models: { User, Order, Product }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// get single user with associated order/s
router.get('/:userId', async (req, res, next) => {
  try {
  const id = req.params.userId
  const userWithOrders = await User.findByPk(id, {
    include: [{
      model: Order,
      as: 'orders',
      include: [{
        model: Product,
        as: 'products'
      }]
    }]
  })
  res.send(userWithOrders)
  } catch (error) {
      next (error)
  }
})