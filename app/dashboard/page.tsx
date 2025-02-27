import { AccountsList } from "../components/AccountsList";
import { TransactionsList } from "../components/TransactionsList";

export default async function Dashboard() {
  return (
    <>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <h2 className="font-semibold text-xl">Hello, Brock 👋🏻</h2>
      <AccountsList />
      <TransactionsList />
    </>
  );
}
