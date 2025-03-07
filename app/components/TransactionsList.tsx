import { TransactionsListItem } from "./TransactionsListItem";
import { TransactionType } from "../lib/types";
import Link from "next/link";

export const TransactionsList = async () => {
  const res = await fetch("http://localhost:3000/api/transactions");
  const data = await res.json();
  // desctructuring
  const { transactions } = data;
  return (
    <div className="bg-white p-4 max-w-lg mt-4">
      <span className="flex justify-between border-b pb-2">
        <h2 className="font-bold text-2xl">💹 Recent Activity</h2>
        <Link
          href={"/transactions"}
          className="text-sm underline hover:cursor-point"
        >
          See All
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-4 divide-y-[1px] ">
        {transactions.slice(0, 5).map((transaction: TransactionType) => {
          return (
            <TransactionsListItem
              key={transaction.id}
              transaction={transaction}
            />
          );
        })}
      </div>
    </div>
  );
};
