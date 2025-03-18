import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const accountNumber = searchParams.get("account_number");
  console.info("account #:", accountNumber);

  const account = await prisma.account.findMany({
    where: {
      account_number: accountNumber?.toString(),
    },
  });
  return Response.json({ account });
};
