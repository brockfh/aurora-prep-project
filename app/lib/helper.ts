export const formatDate = (dateString: string) => {
  // destructure the day, month and year from the dateString
  const [day, month, year] = dateString.split("-");
  // create a new Date object
  const date = new Date(year, month - 1, day); // month is zero indexed
  // Format the date to "Month Day, Year"
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-us", options);
};
