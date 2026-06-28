const { parseBarcode, isValidBarcode, getSessionMessage} = require('./utilsEg');

console.log(parseBarcode('ABXYZ2511290045'));
console.log(isValidBarcode('ABC123'));