import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

try {
  const adminPassword = "12567";
  const hash = bcrypt.hashSync(adminPassword, 10);
  const admin = await prisma.user.create({
    data: {
      name: "ADMIN",
      email: "admi@gmail.com",
      password: hash,
      role: "ADMIN",
    },
  });
} catch (e) {
  console.error(e);
} finally {
  await prisma.$disconnect();
  process.exit(1);
}
