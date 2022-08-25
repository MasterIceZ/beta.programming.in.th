import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const data = [
  {
    memoryLimit: 64,
    fullScore: 100,
    private: false,
    timeLimit: 1.0,
    path: 'prog/00',
    title: 'A+B Problem',
    type: 'normal',
    id: '0000'
  },
  {
    type: 'normal',
    title: 'Grading',
    timeLimit: 1.0,
    memoryLimit: 64,
    private: false,
    path: 'prog/00',
    fullScore: 100,
    id: '0001'
  },
  {
    path: 'prog/00',
    timeLimit: 1.0,
    type: 'normal',
    private: false,
    title: 'Min Max',
    fullScore: 100,
    memoryLimit: 64,
    id: '0002'
  },
  {
    timeLimit: 1.0,
    fullScore: 100,
    title: 'Matrix Addition',
    type: 'normal',
    private: false,
    memoryLimit: 64,
    path: 'prog/00',
    id: '0003'
  },
  {
    memoryLimit: 64,
    title: 'Character Checker',
    path: 'prog/00',
    private: false,
    type: 'normal',
    timeLimit: 1.0,
    fullScore: 100,
    id: '0004'
  },
  {
    fullScore: 100,
    memoryLimit: 64,
    path: 'prog/00',
    private: false,
    timeLimit: 1.0,
    title: 'Pythagorus',
    type: 'normal',
    id: '0005'
  },
  {
    title: 'Soundex',
    private: false,
    timeLimit: 1.0,
    memoryLimit: 64,
    fullScore: 100,
    path: 'prog/00',
    type: 'normal',
    id: '0006'
  },
  {
    timeLimit: 1.0,
    path: 'prog/00',
    fullScore: 100,
    type: 'normal',
    title: 'Herman',
    memoryLimit: 32,
    private: false,
    id: '0007'
  },
  {
    type: 'normal',
    private: false,
    timeLimit: 1.0,
    title: 'X2',
    path: 'prog/00',
    memoryLimit: 32,
    solved: 0,
    fullScore: 100,
    id: '0008'
  },
  {
    timeLimit: 1.0,
    private: false,
    type: 'normal',
    title: 'ABC',
    fullScore: 100,
    path: 'prog/00',
    memoryLimit: 32,
    id: '0009'
  },
  {
    title: 'Trik',
    memoryLimit: 32,
    private: false,
    path: 'prog/00',
    fullScore: 100,
    type: 'normal',
    timeLimit: 1.0,
    id: '0010'
  },
  {
    path: 'ipst/62/may',
    type: 'normal',
    fullScore: 100,
    title: 'กุ๊ยจัดแถว',
    private: false,
    memoryLimit: 256,
    timeLimit: 5.0,
    id: 'o62_may09_judtaew'
  }
]

async function main() {
  const tasks = await prisma.task.createMany({
    data
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
