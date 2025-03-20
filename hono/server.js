import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.use(logger());
app.use(prettyJSON());

// write our routes here

app.get("/transactions", async (c) => {
  const allTransactions = await prisma.transaction.findMany();

  return c.json({ transactions: allTransactions });
});

app.post("/transaction", async (c) => {
  const newTransaction = await prisma.transaction.create({
    data: {
      date: "03-20-2025",
      amount: 100.16,
      category: "Bills",
      type: "debit",
      status: "pending",
      account_id: "e86052e8-c66c-406b-a41a-8ff97dd8da58",
    },
  });

  return c.json({ newTransaction });
});

serve({ fetch: app.fetch, port: 9000 });
