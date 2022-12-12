import { PrismaClient } from '@prisma/client'

export default async function CreateAdWarzone(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.Warzone.create({
    data: {
      nickname: req.body.nickname,
      yearsPlaying: Number(req.body.yearsPlaying),
      discord: req.body.discord
    }
  })

  res.status(201).json(adGame)

}