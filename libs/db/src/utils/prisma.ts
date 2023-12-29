/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  let prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}
//@ts-ignore
const prisma = globalThis.prisma ?? prismaClientSingleton();
export default prisma;

//@ts-ignore
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
