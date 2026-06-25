function checkBarcodePromise(barcode) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (barcode.length === 15) {
        resolve(`Valid barcode : ${barcode}`);
      } else {
        reject("Invalid barcode length");
      }
    }, 500);
  });
}

async function processBarcodePromise(barcode) {
  try{

  const result = await checkBarcodePromise(barcode);
  console.log(result);  
  

  }
  catch(error){
    console.log(error);

  }
}
processBarcodePromise("ABXYZ2511290045");
  
processBarcodePromise("ABC123");
  
const machines = [
  { id: "M001", name: "Fiber Laser Marking Machine", status: "pending" },
  { id: "M002", name: "CNC Cutting Machine", status: "assembled" },
];

function findMachinePromise(machineId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const machine = machines.find((m) => m.id === machineId);
      if (machine) {
        resolve(machine);
      } else {
        reject("Machine not found");
      }
    }, 500);
  });
}

async function assembleProcess(machineID, newStatus)
{
    try{
        const machine = await findMachinePromise(machineID);

        const updateMachine = await updateMachineStatusPromise(machine, newStatus);

        console.log(updateMachine);
    }
    catch(error)
    {
        console.log(error);
    }
}
assembleProcess('M001', 'in_progress')
assembleProcess('M999', 'in_progress')


  

function updateMachineStatusPromise(machine, newStatus) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ ...machine, status: newStatus });
        }, 500);
      });
    }


async function checkMultipleBarcodes(barcodes)
{
    for(const barcode of barcodes)
    {
    try{

  const result = await checkBarcodePromise(barcode);
  console.log(result);  
  

  }
  catch(error){
    console.log(error);

  }
}
}
checkMultipleBarcodes(['ABXYZ2511290045', 'ABC123', 'CDEFG2511290099'])
  
