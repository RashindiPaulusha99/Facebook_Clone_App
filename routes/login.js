const express = require('express')
const app = express()
const router = express.Router()

const CreateAccount = require('../models/createAccount.models')

app.use(express.json())

router.get('/:id',async (req, res) =>{
    try {
        const register = await CreateAccount.findById(req.params.id)
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router