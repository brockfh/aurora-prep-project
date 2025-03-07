import { formatDate } from "../lib/helper";
import { TransactionType } from "../lib/types";

interface TransactionListItemProps {
  transaction: TransactionType;
}
export const TransactionsListItem = ({
  transaction,
}: TransactionListItemProps) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <span className="font-semibold text-xl">
          {transaction.type === "debit" ? "-" : "+"} $
          {transaction.amount.toLocaleString()}
        </span>
        <span className="font-thin text-sm">{transaction.category}</span>
      </div>
      <span className="flex items-center content-right justify-end">
        {formatDate(transaction.date)}
      </span>
    </div>
  );
};
