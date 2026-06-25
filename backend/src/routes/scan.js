const express = require('express')
const router = express.Router()
const {parseBarcode, isValidBarcode} = require('../utils/barcodeParser')

router.post('/',(req, res) => 
{
    const{barcode} = req.body

    if (!barcode)
    {
        return res.status(400).json({
            error: 'Barcode is required'
        })
    }
    if (!isValidBarcode(barcode))
    {
        return res.status(400).json({
            error : 'Invalid barcode length',
            expected : 15,
            received : barcode.length
        })
    }

    const parsed = parseBarcode(barcode)

    res.status(200).json({
        message: 'Barcode scanned successfully',
        raw: barcode,
        parsed: parsed
    })
})

module.exports = router