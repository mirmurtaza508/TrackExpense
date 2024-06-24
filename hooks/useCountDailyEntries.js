export default function useCountDailyEntries(expenses) {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const count = expenses.filter((expense) => expense.date === today).length;
  return count;
}
