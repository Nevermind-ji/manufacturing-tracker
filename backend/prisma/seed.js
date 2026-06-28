const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  // Create test machines
  const machine1 = await prisma.machines.create({
    data: {
      qr_code: 'ILM60J042K26-2059',
      name: 'Fiber Laser Marking Machine',
      type: 'Laser Marking',
      status: 'pending'
    }
  })

  const machine2 = await prisma.machines.create({
    data: {
      qr_code: 'ILM60J042K26-2060',
      name: 'Fiber Laser Marking Machine',
      type: 'Laser Marking',
      status: 'pending'
    }
  })

  // Create test parts
  await prisma.parts.create({
    data: {
      raw_barcode: 'ABXYZ2511290045',
      supplier_code: 'AB',
      part_code: 'XYZ',
      date_raw: '251129',
      serial_no: '0045',
      status: 'available'
    }
  })

  await prisma.parts.create({
    data: {
      raw_barcode: 'CDABC2511290046',
      supplier_code: 'CD',
      part_code: 'ABC',
      date_raw: '251129',
      serial_no: '0046',
      status: 'available'
    }
  })

  await prisma.parts.create({
    data: {
      raw_barcode: 'ABDEF2511290047',
      supplier_code: 'AB',
      part_code: 'DEF',
      date_raw: '251129',
      serial_no: '0047',
      status: 'available'
    }
  })

  // Create test operator
  await prisma.operators.create({
    data: {
      name: 'Tanay',
      email: 'tanay@infused.com',
      password_hash: 'temp_password_123'
    }
  })

  console.log('Seed data created successfully')
  console.log('Machines:', machine1.qr_code, machine2.qr_code)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })