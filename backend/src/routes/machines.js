const express = require('express')
const router = express.Router()

router.get('/:machineId',(req, res) =>
{
    const {machineId} = req.params

    res.status(200).json({
        message : 'Machine found',
        machineId : machineId
    })
})

module.exports = router