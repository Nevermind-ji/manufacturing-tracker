const express = require('express')
const router = express.Router()
const prisma = require('../db/prisma')

router.get('/:machineId', async (req, res) => {
  //console.log("Request received");

  try {
    //console.log("Before Prisma");

    const machine = await prisma.machines.findUnique({
      where: {
        qr_code: req.params.machineId
      }
    });

    //console.log("After Prisma");

    res.json(machine);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router