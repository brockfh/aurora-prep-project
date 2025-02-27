"use client";

import { useEffect } from "react";

export const TransactionsList = () => {
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await fetch("/api/transactions");
    const data = await res.json();
    console.log(data);
  };
  return <div>Transactions List Here (Client Side Data Fetching)</div>;
};
