const { Expense } = require('./models')

// get all expenses
const getExpenses = async () => {
    try {
        await Expense.find({}).exec()
    } catch (err) {
        err.stack
    }
}

const addExpense = async (obj) => {
    try {
        await Expense.create(obj)
    } catch (err) {
        err.stack
    }
}

module.exports = { getExpenses, addExpense }