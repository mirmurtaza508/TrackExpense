import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import useCountDailyEntries from "../hooks/useCountDailyEntries";

const ExpenseBarChart = ({ expenses }) => {
  const categories = ["Grocery", "Clothes", "Bills", "Education", "Medicine"];
  const categoryAmounts = categories.map((category) =>
    expenses
      .filter((expense) => expense.category === category)
      .reduce((total, expense) => total + +expense.amount, 0)
  );
  const dailyEntriesCount = useCountDailyEntries(expenses);
  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category Amount ₹",
        data: categoryAmounts,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: `Total Entries: ${expenses.length} | Today's Entries: ${dailyEntriesCount}       `,

        position: "right",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ExpenseBarChart;
