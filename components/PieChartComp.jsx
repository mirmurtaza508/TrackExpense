import { PieChart } from "@mui/x-charts";
import React from "react";

const PieChartComp = ({ expenses }) => {
  // Define categories and corresponding labels
  const categories = [
    { name: "grocery", label: "Grocery" },
    { name: "clothes", label: "Clothes" },
    { name: "bills", label: "Bills" },
    { name: "education", label: "Education" },
    { name: "medicine", label: "Medicine" },
  ];

  // Function to calculate total amount for a specific category
  const calculateCategoryTotal = (categoryName) => {
    return expenses
      .filter((expense) =>
        expense.category.toLowerCase().includes(categoryName)
      )
      .reduce((acc, curr) => acc + +curr.amount, 0);
  };
  // Create data array for PieChart
  const data = categories
    .map((category, index) => ({
      id: index,
      value: expenses.filter((expense) =>
        expense.category.toLowerCase().includes(category.name)
      ).length,
      label: expenses.filter((expense) =>
        expense.category.toLowerCase().includes(category.name)
      ).length
        ? `${category.label} Amount => ${calculateCategoryTotal(category.name)}`
        : undefined,
    }))
    .filter((item) => item.value > 0);

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={400}
      legend={{
        direction: "column",
        position: { vertical: "bottom", horizontal: "middle" },
      }}
      margin={{ bottom: 60, left: 60 }}
    />
  );
};

export default PieChartComp;
