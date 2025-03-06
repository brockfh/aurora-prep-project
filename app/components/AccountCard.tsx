import Link from "next/link";
import { AccountType } from "../lib/types";

type AccountPropsType = {
  account: AccountType;
};

export const AccountCard = ({ account }: AccountPropsType) => {
  return (
    <div className="bg-white rounded p-4">
      <p>
        <span className="font-bold font-xl hover:underline ">
          <Link href={`/accounts/${account.account_number}`}>
            {account.account_number}
          </Link>
        </span>{" "}
        <span className="font-sm font-thin">({account.type})</span>
      </p>
      <p className="text-md">${account.balance.toLocaleString()}</p>
      <p className="text-sm">{account.opened_date}</p>
    </div>
  );
};
