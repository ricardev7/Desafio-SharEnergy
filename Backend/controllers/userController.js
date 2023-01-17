const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidate, registerValidate } = require('./validate');


const userController = {
    register: async function (req, res) {

        const { error } = registerValidate(req.body)
        if (error) { return res.status(400).send(error.message) }

        const selectedUser = await User.findOne({ username: req.body.username })
        if (selectedUser) return res.status(400).send('Este usuário já existe.')

        const user = new User({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password)
        })
        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }
    },

    login: async function (req, res) {
        const { error } = loginValidate(req.body)
        if (error) { return res.status(400).send(error.message) }

        const selectedUser = await User.findOne({ username: req.body.username })
        if (!selectedUser) return res.json({ boolean: false });

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
        if (!passwordAndUserMatch) return res.json({ boolean: false, msg: 'Usuário ou senha incorreta.' });

        const token = jwt.sign({ _id: selectedUser._id }, process.env.TOKEN_SECRET);
        const user = selectedUser

        res.header('authorization-token', token)
        res.status(200).json({user: true, token })
    },

    checkToken: async function (req, res) {
        const token = req.body.token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)

        if (!token) {
            return res.status(401).json({ msg: 'Acesso negado!' })
        }

        if(decoded){
            const user = await User.findById(decoded._id)
            if(user){
                return res.json({user: true})
            }
        }  
    }
}

module.exports = userController