import { PrismaClient } from '@prisma/client'

export default async function CreateAdCSGO(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.CSGO.create({
    data: {
      nickname: req.body.nickname,
      yearsPlaying: Number(req.body.yearsPlaying),
      discord: req.body.discord
    }
  })

  res.status(201).json(adGame)

}