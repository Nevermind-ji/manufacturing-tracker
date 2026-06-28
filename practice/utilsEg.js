function parseBarcode(barcode)
{
    return {
        supplierCode: barcode.slice(0, 2),
        partCode: barcode.slice(2, 5),
        manufactureDate: barcode.slice(5, 11),
        serialNo: barcode.slice(11, 15)
    };
}
function isValidBarcode(barcode)
{
    return barcode.length === 15;
}
function getSessionMessage(status)
{
    if(status === 'open')
    {
        return 'Assembly in progress';
    }
    else if(status === 'closed')
    {
        return 'Assembly complete';
    }
    else
    {
        return 'Unknown status';
    }
}

module.exports = {parseBarcode, isValidBarcode,getSessionMessage};