const faker = require('faker');

let products = [];

for (let i = 1; i <= 150; i++) {
	let name = faker.name.lastName();
	let image = faker.random.arrayElement([
		'https://cdn.shopify.com/s/files/1/0363/8621/products/IMG_2530_large.jpg?v=1638336249',
		'https://cdn.shopify.com/s/files/1/0363/8621/products/CC4FB7E5-A900-4F09-A6CE-0CD2003DE775_1_105_c_large.jpg?v=1633748278',
		'https://cdn.shopify.com/s/files/1/0363/8621/products/AE5384CB-0D2F-4D18-904B-DCDE0A8D9DFF_1_201_a_large.jpg?v=1637385276',
		'https://cdn.shopify.com/s/files/1/0363/8621/products/IMG_2325_large.jpg?v=1636156142',
	]);
	let ABV = faker.datatype.number({ min: 0, max: 85 });
	let stockAmount = faker.datatype.number({ min: 0, max: 1500 });
	let price = faker.datatype.number({ min: 40, max: 120 });
	let description = faker.lorem.words(12);
	let alcoholType = faker.random.arrayElement([
		'tequila',
		'whiskey',
		'wine',
		'rum',
	]);

	products.push({
		name,
		image,
		ABV,
		stockAmount,
		price,
		description,
		alcoholType,
	});
}

let users = [];

for (let i = 1; i <= 100; i++) {
	let username = faker.internet.userName();
	let password = 'password123';
	let fullName = faker.fake('{{name.firstName}} {{name.lastName}}');
	let email = faker.internet.email();
	let address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`;
	let dob = faker.date.between('1965-01-01', '2000-01-01');

	users.push({
		username,
		password,
		fullName,
		email,
		address,
		dob,
	});
}

let orders = [];

for (let i = 1; i <= 200; i++) {
	let fulfilled = faker.datatype.boolean();
	let userId = faker.datatype.number({ min: 1, max: 100 });

	orders.push({
		fulfilled,
		userId,
	});
}
let productOrders = [];

for (let i = 1; i <= 200; i++) {
	let orderId = i;
	let productId = faker.datatype.number({ min: 1, max: 150 });

	productOrders.push({
		orderId,
		productId,
	});
}

module.exports = {
	products,
	users,
	orders,
	productOrders,
};
