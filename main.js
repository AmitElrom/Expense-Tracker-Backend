require('./configs/db')

const cors = require('cors')
const express = require('express')
const app = express()

const expensesRouter = require('./routers/expenseRouter')

app.use(cors())
app.use(express.json())

app.route('expenses', expensesRouter)

app.listen(1000, () => {
    console.log('expenses server is on');
})