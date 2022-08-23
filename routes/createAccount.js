const express = require('express')
const app = express()
const router = express.Router()

const CreateAccount = require('../models/createAccount.models')

app.use(express.json())

router.get('/',async (req, res) =>{
    try {
        const register = await CreateAccount.find()
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/:id',async (req, res) =>{
    try {
        const register = await CreateAccount.findById(req.params.id)
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.post('/',async (req,res) => {
    const register = new CreateAccount({
        firstName:req.body.firstName,
        surname:req.body.surname,
        gender:req.body.gender,
        dateOfBirth:req.body.dateOfBirth,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email,
    })

    try {
        const register = await register.save()
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.put('/',async (req,res) =>{
    try {
        const register = await CreateAccount.findById(req.params.id)
        register.firstName = req.body.firstName
        register.surname = req.body.surname
        register.gender = req.body.gender
        register.dateOfBirth = req.body.dateOfBirth
        register.password = req.body.password
        register.phoneNumber = req.body.phoneNumber
        register.email = req.body.email
        const response = await register.save()

        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.delete('/:id',async (req,res) =>{
    try {
        const register = await CreateAccount.findById(req.params.id)
        const response = await register.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router

