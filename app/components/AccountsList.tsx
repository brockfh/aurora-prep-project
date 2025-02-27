export const AccountsList = async () => {
  const res = await fetch("http:localhost:3000/api/accounts");
  const data = await res.json();
  console.log(data);
  return <div>Accounts List Here (Server Side Data Fetching)</div>;
};
