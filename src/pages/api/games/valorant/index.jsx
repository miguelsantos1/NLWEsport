import { PrismaClient } from '@prisma/client'

export default async function GetAdCSGO(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.CSGO.findMany()

  res.status(200).json(adGame)

}