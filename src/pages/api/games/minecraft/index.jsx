import { PrismaClient } from '@prisma/client'

export default async function GetAdMinecraft(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.Minecraft.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  res.status(200).json(adGame)

}