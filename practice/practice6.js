function processBarcode(barcode, callback)
{
    if(barcode.length === 15)
    {
        callback(null,'Valid barcode');
    }
    else 
    {
        callback('Invalid barcode', null);
    }

}

processBarcode('ABXYZ2511290045',(error,result)=>{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(result);
    }
})

processBarcode('ABc123',(error,result)=>{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(result);
    }
})
function delayedLog(message)
{
    setTimeout(()=>{
        console.log(message);
    },1000);
}
delayedLog('Session Started');
console.log('Scanning Machine');

const machines = [
  { id: 'M001', name: 'Fiber Laser Marking Machine', status: 'pending' },
  { id: 'M002', name: 'CNC Cutting Machine', status: 'assembled' }
]

function findMachine(machineID, callback)
{
    const machine = machines.find(m=>m.id===machineID);
    if(machine)
    {
        callback(null,'machine found');
    }
    else{
        callback('machine not found',null);
    }
}

findMachine('M001',(error,result)=>
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(result);
    }
})