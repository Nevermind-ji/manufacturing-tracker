const part = {
    id : 'S234S',
    barcode : 'ILM60J042K26-2059',
    type : 'some_kind',
    status : 'pending',
    supplier_code : 'AB'
}

console.log(part.barcode);
part.status = 'assigned';
console.log(part.status);
 const assemblySession = {
    id : 'S234S',
    machine_id : '@S234S',
    operator_name : 'Tanay',
    status : 'open',
    started_at : new Date().toISOString()
 }

 console.log(assemblySession);