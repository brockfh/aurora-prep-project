export type AccountType = {
  id: string;
  type: string;
  balance: number;
  currency: string;
  account_number: string;
  opened_date: string;
};

export type TransactionType = {
  id: number;
  date: string;
  amount: number;
  category: string;
  type: string;
  status: string;
  account_id: number;
};
