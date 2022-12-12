import { PrismaClient } from '@prisma/client'

export default async function GetAdGTA(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.GTA.findMany()

  res.status(200).json(adGame)

}