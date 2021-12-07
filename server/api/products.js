const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const AllProducts = await Product.findAll()
    res.send(AllProducts)
  } catch (err) {
    next(err)
  }
})

module.exports = router