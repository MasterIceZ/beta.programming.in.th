import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id }
  } = req

  switch (method) {
    case 'GET':
      const submission = await prisma.submission.findUnique({
        where: { id: Number(id) },
        select: {
          id: true,
          status: true,
          submittedAt: true,
          time: true,
          memory: true,
          score: true,
          groups: true,
          language: true,
          user: true
        }
      })
      res.status(200).json(submission)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
