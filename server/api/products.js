const router = require("express").Router();
const verifyAdmin = require('./authMiddleware')
const {
  models: { Product },
} = require("../db");
module.exports = router;


//get all products; available to all users/guests
router.get("/", async (req, res, next) => {
  try {
    const AllProducts = await Product.findAll();
    res.send(AllProducts);
  } catch (error) {
    next(error);
  }
});


//get all products admin only access with authentication middleware
router.get("/admin", verifyAdmin, async (req, res, next) => {
  try {
    const AllProducts = await Product.findAll();
    res.send(AllProducts);
  } catch (error) {
    next(error);
  }
});


//get a single product:
router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId, {
    });
    if (!product) {
      res.sendStatus(404)
      return
    }
    res.send(product);
  } catch (error) {
    next(error);
  }
});

//get a single product admin only access with authentication middleware
router.get("/admin/:productId", verifyAdmin, async (req, res, next) => {
  try {

    const product = await Product.findByPk(req.params.productId, {
    });
    if (!product) {
      res.sendStatus(404)
      return
    }
    res.send(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
