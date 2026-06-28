//console.log("1");
require('dotenv').config();

//console.log("2");
const express = require('express');

//console.log("3");
const app = express();

//console.log("4");
const machineRoutes = require('./routes/machines');

//console.log("5");
const scanRoutes = require('./routes/scan');

// console.log("6");

app.use(express.json())

// app.use((req, res, next) => {
//     console.log("Incoming:", req.method, req.url);
//     next();
// });

const PORT = 3456
// app.get('/', (req, res) => {
//     res.send("THIS IS MY SERVER");
// });

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