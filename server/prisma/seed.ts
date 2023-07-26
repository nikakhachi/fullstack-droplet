import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const run = async () => {
  await prisma.test.create({
    data: { number: 1 },
  });
};

run();
