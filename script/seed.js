'use strict'

const {db, models: {User, Product} } = require('../server/db')

//dummy data array for Product model

const products = [{
  name: 'Tito Tequila',
  price: 76.99,
  stockAmount: 345,
  ABV: .40,
  image: 'https://cdn.shopify.com/s/files/1/0363/8621/products/IMG_2530_large.jpg?v=1638336249'
}, {
  name: 'Rose Rum',
  stockAmount: 789,
  ABV: .40,
  price: 89.99,
  description: 'It’s not fun without rum.',
  image: 'https://cdn.shopify.com/s/files/1/0363/8621/products/CC4FB7E5-A900-4F09-A6CE-0CD2003DE775_1_105_c_large.jpg?v=1633748278'
}, {
  name: 'Walter Whiskey',
  stockAmount: 928,
  ABV: .60,
  price: 68.99,
  description: 'Too much of anything is bad, but too much good whiskey is barely enough.',
  image: 'https://cdn.shopify.com/s/files/1/0363/8621/products/AE5384CB-0D2F-4D18-904B-DCDE0A8D9DFF_1_201_a_large.jpg?v=1637385276'
}, {
  name: 'Willow Wine',
  stockAmount: 987,
  ABV: .11 ,
  price: 87.99,
  description: 'Age is just a number. It’s totally irrelevant unless, of course, you happen to be a bottle of wine',
  image: 'https://cdn.shopify.com/s/files/1/0363/8621/products/IMG_2325_large.jpg?v=1636156142'
}];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  await Promise.all(products.map(product => {
    return Product.create(product)
  }))

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
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
