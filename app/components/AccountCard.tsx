import { AccountType } from "../lib/types";

type AccountProps = {
  account: AccountType;
};

export const AccountCard = ({ account }: AccountProps) => {
  return (
    <div>
      <p>
        {account.account_number} <span>({account.type})</span>
      </p>
      <p>${account.balance.toLocaleString()}</p>
      <p>{account.opened_date}</p>
    </div>
  );
};
