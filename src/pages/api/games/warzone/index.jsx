import { PrismaClient } from '@prisma/client'

export default async function GetAdWarzone(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.Warzone.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  res.status(200).json(adGame)

}