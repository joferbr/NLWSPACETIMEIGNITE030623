import { PrismaClient } from '@prisma/Client'

export const prisma = new PrismaClient({
  log: ['query'],
})
