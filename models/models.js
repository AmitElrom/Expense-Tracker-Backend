const { Schema, model } = require('mongoose')

const expenseSchema = Schema({
    title: { type: String, required: true },
    amount: { type: String, required: true },
    date: { type: Date, required: true },
})

const Expense = model('expenses', expenseSchema)

module.exports = { Expense }