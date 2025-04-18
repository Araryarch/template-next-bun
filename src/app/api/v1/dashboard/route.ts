import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    switch (req.method) {
      case 'GET':
        const dashboardData = await prisma.user.findMany()
        return res.status(200).json(dashboardData)

      case 'POST':
        const newUser = await prisma.user.create({
          data: req.body,
        })
        return res.status(201).json(newUser)

      case 'PUT':
        const updatedUser = await prisma.user.update({
          where: { id: req.body.id },
          data: req.body,
        })
        return res.status(200).json(updatedUser)

      case 'DELETE':
        const deletedUser = await prisma.user.delete({
          where: { id: req.body.id },
        })
        return res.status(200).json(deletedUser)

      default:
        return res.status(405).json({ error: 'Method Not Allowed' })
    }
  } catch (error) {
    return res.status(500).json({ error: error })
  }
}
