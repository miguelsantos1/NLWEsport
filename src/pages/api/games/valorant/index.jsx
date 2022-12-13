import { PrismaClient } from '@prisma/client'

export default async function GetAdValorant(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.Valorant.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  res.status(200).json(adGame)

}