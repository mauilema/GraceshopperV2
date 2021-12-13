const router = require('express').Router();
const {
	models: { User },
} = require('../db');
const Orders = require('../db/models/Orders');
const ProductOrders = require('../db/models/ProductOrders');
module.exports = router;

router.param('id', async (req, res, next, id) => {
	try {
		const user = await User.findByPk(id);
		if (!user) res.sendStatus(404);
		req.requestedUser = user;
		next();
		return null;
	} catch (err) {
		next(err);
	}
});

router.get('/', async (req, res, next) => {
	try {
		const users = await User.findAll({
			// explicitly select only the id and username fields - even though
			// users' passwords are encrypted, it won't help if we just
			// send everything to anyone who asks!
			attributes: ['id', 'username'],
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

const isAdminMiddleware = (req, res, next) => {
	if (!req.user) {
		const err = new Error('Please sign up or log in');
		err.status = 401;
		next(err);
	} else if (req.user.isAdmin === false) {
		//if the current user is not admin and is not his/her own profile
		const err = new Error(`I'm watching you...`);
		err.status = 401;
		next(err);
	} else {
		next();
	}
};

router.get('/:id', isAdminMiddleware, async (req, res, next) => {
	try {
		const id = req.params.userId
  const userWithOrders = await User.findByPk(id, {
    include: [{
      model: Orders,
      as: 'orders',
      include: [{
        model: ProductOrders,
        as: 'products'
      }]
    }]
  })
  res.send(userWithOrders)
	} catch (err) {
		next(err);
	}
});

router.post('/', isAdminMiddleware, async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', isAdminMiddleware, async (req, res, next) => {
	try {
		const updatedUser = await req.requestedUser.update(req.body);
		res.json(updatedUser);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
	try {
		await req.requestedUser.destroy();
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
});
