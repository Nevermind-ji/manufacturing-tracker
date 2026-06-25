const parts = [
  { id: 'PART_001', status: 'available', type: 'motor',   supplier: 'AB' },
  { id: 'PART_002', status: 'assigned',  type: 'seal',    supplier: 'CD' },
  { id: 'PART_003', status: 'available', type: 'bolt',    supplier: 'AB' },
  { id: 'PART_004', status: 'assigned',  type: 'motor',   supplier: 'EF' },
  { id: 'PART_005', status: 'available', type: 'bearing', supplier: 'CD' }
]
const list_IDs = parts.map(parts => parts.id);


console.log(list_IDs);

const list_type = parts.map(parts=> parts.type);
console.log(list_type);

const id_AB = parts.filter(part => part.supplier === 'AB');
const id_PART_003 = parts.filter(part => part.id === 'PART_003');
const id_PART_999 = parts.filter(part => part.id === 'PART_999');
console.log(id_AB);
console.log(id_PART_003);
console.log(id_PART_999);


const type_name1 = parts.some(part => part.type === 'motor');
console.log(type_name1);
const type_name2 = parts.some(part => part.type === 'spring');
console.log(type_name2);

parts.forEach(part =>{
    console.log(`${part.id} is ${part.status}`);
})




