import { PrismaClient } from '@prisma/client'

export default async function GetAdCSGO(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.CSGO.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  res.status(200).json(adGame)

}