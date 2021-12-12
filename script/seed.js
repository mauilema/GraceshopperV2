'use strict'

const {db, models: {User, Product, Order} } = require('../server/db')
const { products, users, orders } = require('./seedData')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')
  
  const admins = [{
    username: 'JoseAdmin',
    fullName: 'Jose Admin',
    isAdmin: 'true',
    password: 'admin456',
    dob: '1999-04-01',
    email: 'fsajose@aol.com'
  }, {
    username: 'MiliAdmin',
    fullName: 'Mili Admin',
    isAdmin: 'true',
    password: 'admin123',
    dob: '2000-05-11',
    email: 'fsamili@aol.com'
  }
  ]

  await Promise.all(admins.map(admin => {
    return User.create(admin)
  }))

  const allUsers = await Promise.all(users.map(user => {
    return User.create(user)
  }))
  
  const allProducts = await Promise.all(products.map(product => {
    return Product.create(product)
  }))

  const allOrders = await Promise.all(orders.map(order => {
    return Order.create(order)
  }))

 
  await allUsers[1].addOrder(allOrders[1])
  await allUsers[1].addOrder(allOrders[2])
  await allUsers[1].addOrder(allOrders[3])
  await allUsers[1].addOrder(allOrders[4])
  await allUsers[1].addOrder(allOrders[5])
  await allUsers[2].addOrder(allOrders[6])
  await allUsers[2].addOrder(allOrders[7])
  await allUsers[2].addOrder(allOrders[8])
  await allUsers[2].addOrder(allOrders[9])
  await allUsers[2].addOrder(allOrders[10])

  await allOrders[1].addProduct(allProducts[2])
  await allOrders[1].addProduct(allProducts[3])
  await allOrders[1].addProduct(allProducts[4])
  await allOrders[1].addProduct(allProducts[5])
  await allOrders[1].addProduct(allProducts[6])
  await allOrders[2].addProduct(allProducts[2])
  await allOrders[2].addProduct(allProducts[3])
  await allOrders[2].addProduct(allProducts[4])
  await allOrders[2].addProduct(allProducts[5])
  await allOrders[2].addProduct(allProducts[6])



  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
