import * as db from "../../lib/db.json";
export const GET = async () => {
  // example of fetching data from an external service
  // const res = await fetch('wwww.firsthorizon.com/data?loginId=brock/accounts', {method: "GET"});
  // const data = await res.json()
  // return Response.json({data})

  // example of fetching data from a database
  const transactions = db.transactions;
  return Response.json({ transactions });
};
