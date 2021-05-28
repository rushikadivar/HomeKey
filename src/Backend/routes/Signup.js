const router = require('express').Router();

const bcrypt = require('bcryptjs')

const user = require('../models/User');

// ////////////////////////   register the user ///////////////////////////////////////////////

router.route('/').post(async (req, res) => {
    const { firstName, lastName, email, password: plainTextPassword } = req.body

    if (!firstName || typeof firstName !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }
    if (!lastName || typeof lastName !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }
    if (!email || typeof email !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }

    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    if (plainTextPassword.length < 5) {
        return res.json({
            status: 'error',
            error: 'Password too small. Should be atleast 6 characters'
        })
    }

    const password = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await user.create({
            firstName,
            lastName,
            email,
            password
        })
        console.log('User created successfully: ', response)
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key
            return res.json({ status: 'error', error: 'Username already in use' })
        }
        throw error
    }

    res.json({ status: 'ok' })
})

module.exports = router;