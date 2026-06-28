const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "postgresql://postgres:DietLenovo17@localhost:5432/manufacturing_tracker?schema=public"
    }
  }
})

module.exports = prisma
