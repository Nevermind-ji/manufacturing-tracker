function parseBarcode(barcode)
{
    return{
        supplier_code: barcode.slice(0,2),
        part_code: barcode.slice(2,5),
        data_raw: barcode.slice(5,11),
        serial_no: barcode.slice(11)
    }
}

function isValidBarcode(barcode)
{
    return barcode.length ===15
}

module.exports = { parseBarcode, isValidBarcode }