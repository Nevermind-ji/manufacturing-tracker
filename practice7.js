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
checkBarcodePromise("ABXYZ2511290045")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

checkBarcodePromise("ABC123")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
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

findMachinePromise("M001")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
findMachinePromise("M099")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function updateMachineStatusPromise(machine, newStatus) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ ...machine, status: newStatus });
        }, 500);
      });
    }

findMachinePromise("M001")
  .then((machine) => {
    
    return updateMachineStatusPromise(machine, "in_progress");
  })
  .then((updatedMachine) => {
    console.log(updatedMachine);
  })
  .catch((error) => {
    console.log(error);
  });
