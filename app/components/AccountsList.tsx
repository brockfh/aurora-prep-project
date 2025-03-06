"use client";
import { useEffect, useState } from "react";
import { AccountCard } from "./AccountCard";
import { AccountType } from "../lib/types";

export const AccountsList = () => {
  const [accountData, setAccountData] = useState<AccountType[]>([]);

  useEffect(() => {
    const getAccountData = async () => {
      const res = await fetch("/api/accounts");
      const data = await res.json();
      setAccountData(data.accounts);
    };
    // fake network latency
    setTimeout(() => {
      getAccountData();
    }, 1000);
  }, []);

  return (
    <section>
      <div className="grid grid-cols-5 gap-2 ">
        {accountData.length > 0 &&
          accountData.map((account) => {
            return <AccountCard key={account.id} account={account} />;
          })}
      </div>
    </section>
  );
};
