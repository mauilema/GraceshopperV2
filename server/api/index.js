const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));

//dummy data
let productsInCart = [
  { id: 1, name: "name1" },
  { id: 2, name: "name2" },
  { id: 3, name: "name3" },
  { id: 4, name: "name4" },
];

router.get("/checkoutExample/", (req, res, next) => {
  try {
    res.send(productsInCart);
  } catch (err) {
    console.log(
      "there was an error inside of the routes folder api/index ",
      err
    );
  }
});

router.get("/checkoutExample/:id", async (req, res, next) => {
  try {
    // const { data } = await productsInCart.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });
    res.send(productsInCart[req.params.id]);
  } catch (err) {
    console.log(
      "there was an error inside of the routes folder api/index ",
      err
    );
  }
});

router.delete("/checkoutExample/:id", async (req, res, next) => {
  console.log("these are products", productsInCart);
  console.log("prod in cart + req params", productsInCart[req.params.id]);
  try {
    await productsInCart.destroy({
      where: {
        id: req.params.id,
      },
    });
    // const product = await productsInCart.findByPk(req.params.id);
    // await productsInCart[req.params.id].destroy();
    // res.send(product);
  } catch (err) {
    console.log(
      "there was an error inside of the routes folder api/index  THE DELETE ONE",
      err
    );
  }
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
