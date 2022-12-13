import { PrismaClient } from '@prisma/client'

export default async function CreateAdGTA(req, res) {

  const prisma = new PrismaClient()

  const adGame = await prisma.GTA.create({
    data: {
      nickname: req.body.nickname,
      yearsPlaying: Number(req.body.yearsPlaying),
      discord: req.body.discord
    }
  })

  res.status(201).send('<h1> Dados enviados</h1> <a href="/game/gta"> Voltar aos anuncios <a/>')

}