const router = require("express").Router();
const users = require('../models/User');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#(&@!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk';

// ///////////// for login the user  ///////////////////

router.route('/').post( async (req, res) => {
    const { email, password } = req.body
    const user = await users.findOne({ email }).lean()

    if (!user) {
        return res.json({ status: 'error', error: 'Invalid username/password' })
    }

    if (await bcrypt.compare(password, user.password)) {
        // the email, password combination is successful

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            JWT_SECRET
        )

        return res.json({ status: 'ok', data: token })
    }

    res.json({ status: 'error', error: 'Invalid username/password' })
});

module.exports = router;
