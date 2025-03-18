"use client";

import { AccountType } from "@/app/lib/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { maskAccountNumber } from "@/app/lib/helper";

export default function Account() {
  const [accountInfo, setAccountInfo] = useState<AccountType>();

  const id = usePathname().split("/")[2];
  useEffect(() => {
    const getAccountData = async () => {
      const res = await fetch(`/api/account?id=${id}`, { method: "GET" });
      const data = await res.json();
      setAccountInfo(data.account[0]);
    };
    getAccountData();
  }, []);

  if (!accountInfo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">{accountInfo.nickname}</h1>
      <p className="font-thin text-sm">
        <span>{accountInfo.type}</span>{" "}
        <span>{maskAccountNumber(accountInfo.account_number.toString())}</span>
      </p>
      <p className="mt-4 ">
        ${accountInfo.balance.toLocaleString()} {accountInfo.currency}
      </p>
    </>
  );
}
