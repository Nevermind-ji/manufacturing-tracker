const express = require('express')

const app = express()

const machineRoutes = require('./routes/machines')
const scanRoutes = require('./routes/scan')

app.use(express.json())

const PORT = 3000

app.get('/health', (req,res)=>
{
    res.status(200).json({
        status: 'ok',
        message: 'Manufacturing Tracker API is running',
        timestamp: new Date().toISOString()
    })
})

app.use('/api/machines', machineRoutes)
app.use('/api/scan', scanRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})