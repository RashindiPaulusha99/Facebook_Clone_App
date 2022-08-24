const express = require('express')
const app = express()
const router = express.Router()

const CreateAccount = require('../models/createAccount.models')

app.use(express.json())

router.get('/:email/:password',async (req, res) =>{
    try {
        const register = await CreateAccount.findOne({ email: req.params.email, password: req.params.password })
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router