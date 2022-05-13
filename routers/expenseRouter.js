const express = require('express')
const router = express.Router()
const { getExpenses, addExpense } = require('../models/expenseBL')

router.route('/')
    .get(async (req, res) => {
        try {
            const expenses = await getExpenses()
            res.sendStatus(200).json(expenses)
        } catch (error) {
            res.sendStatus(400).json({ error })
        }
    })

router.route('/')
    .post(async (req, res) => {
        try {
            let { body: newExpense } = req
            let status = await addExpense(newExpense)
            res.sendStatus(201).json({ status })
        } catch (error) {
            res.sendStatus(409).json({ error })
        }
    })

module.exports = router