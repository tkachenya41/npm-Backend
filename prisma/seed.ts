import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

try {
  const adminPassword = "12345romaN@#$";
  const hash = bcrypt.hashSync(adminPassword, 10);
  const admin = await prisma.user.create({
    data: {
      name: "ADMIN",
      email: "adminiu@gmail.com",
      password: hash,
      role: "ADMIN",
    },
  });
} catch (e) {
  console.error(e);
  console.log(e);
} finally {
  await prisma.$disconnect();
  process.exit(1);
}
