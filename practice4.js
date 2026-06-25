const barcode = 'ABXYZ2511290045';

console.log(`The supplier code is ${barcode.slice(0,2)}`);
console.log(`The part code is ${barcode.slice(2,5)}`);
console.log(`The date is ${barcode.slice(5,11)}`);

if(barcode.slice(0,2)==='AB')
{
    console.log("True, barcode starts with AB");
}
else
    console.log("False, barcode doesn't start with AB")
if(barcode.length==15)
    {
        console.log("True, barcode is 15 bit long");
    }
    else
        console.log("False, barcde is not 15 bits long");


const hell = (Barcode) =>{
    const details = {
        supplier_code : Barcode.slice(0,2),
        part_code : Barcode.slice(2,5),
        date_raw : Barcode.slice(5, 11),
        serial_no : Barcode.slice(11,)
    }
    return details;
}

console.log(hell(barcode));