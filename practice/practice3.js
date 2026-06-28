function greetOperator(name)
{
    return "Welcome, " + name+". Assembly session is ready."
}
console.log(greetOperator('Tanay'));

const isValidBarcode  = function(barcode)
{
    if(barcode.length==15)
    {
        return true;
    }
    else
        return false;
}

console.log(isValidBarcode('ABXYZ2511290045'));
console.log(isValidBarcode('ABC123'));

const getSessionStatus = (sessions)=> {
    if(sessions.status == 'open')
    {
        return 'Assembly in progress';
    }
    else if(sessions.status == 'closed')
        return 'Assembly complete';
    else
        return 'Unknown status';
}

const sessions1 = {
    status : 'open',
    id : 'AB'
}

const sessions2 = {
    status : 'closed',
    id : 'CD'
}

const sessions3 = {
    status : 'pending',
    id : 'AB'
}
console.log(getSessionStatus(sessions1));
console.log(getSessionStatus(sessions2));
console.log(getSessionStatus(sessions3));