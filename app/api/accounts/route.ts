import { AccountType } from "@/app/lib/types";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
  const allAccounts = await prisma.account.findMany();

  return Response.json({ allAccounts });
};

export const POST = async () => {
  const newAccount: AccountType = await prisma.account.create({
    data: {
      name: "Express Checking",
      nickname: "Brock's Checking Account",
      balance: 5328.64,
      account_number: "1234567890",
      currency: "USD",
      opened_date: "13-03-2025",
      type: "Checking",
    },
  });

  return Response.json({ newAccount });
};
