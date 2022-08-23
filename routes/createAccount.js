const express = require('express')
const app = express()
const router = express.Router()

const CreateAccount = require('../models/createAccount.models')

app.use(express.json())

