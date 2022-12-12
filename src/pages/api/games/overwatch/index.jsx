import { PrismaClient } from '@prisma/client'

export default async function GetAdOverwatch(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.Overwatch.findMany()

  res.status(200).json(adGame)

}