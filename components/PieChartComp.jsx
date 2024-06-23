import { PieChart } from "@mui/x-charts";
import React from "react";

const PieChartComp = ({ expenses }) => {
  const grocery = expenses.filter((expense) =>
    expense.category.toLowerCase().includes("grocery")
  );
  const groceryTotal = grocery.reduce((acc, curr) => {
    return acc + +curr.amount;
  }, 0);
  const clothes = expenses.filter((expense) =>
    expense.category.toLowerCase().includes("clothes")
  );
  const clothesTotal = clothes.reduce((acc, curr) => {
    return acc + +curr.amount;
  }, 0);
  const bills = expenses.filter((expense) =>
    expense.category.toLowerCase().includes("bills")
  );
  const billsTotal = bills.reduce((acc, curr) => {
    return acc + +curr.amount;
  }, 0);
  const education = expenses.filter((expense) =>
    expense.category.toLowerCase().includes("education")
  );
  const educationTotal = education.reduce((acc, curr) => {
    return acc + +curr.amount;
  }, 0);
  const medicine = expenses.filter((expense) =>
    expense.category.toLowerCase().includes("medicine")
  );
  const medicineTotal = medicine.reduce((acc, curr) => {
    return acc + +curr.amount;
  }, 0);
  const data = [
    {
      id: 0,
      value: grocery.length,
      label: grocery.length ? `Grocery Amount => ${groceryTotal}` : undefined,
    },
    {
      id: 1,
      value: clothes.length,
      label: clothes.length ? `Clothes  Amount => ${clothesTotal} ` : undefined,
    },
    {
      id: 2,
      value: bills.length,
      label: bills.length ? `Bills  Amount => ${billsTotal}` : undefined,
    },
    {
      id: 3,
      value: education.length,
      label: education.length
        ? `Education  Amount => ${educationTotal}`
        : undefined,
    },
    {
      id: 4,
      value: medicine.length,
      label: medicine.length
        ? `Medicine Amount => ${medicineTotal}`
        : undefined,
    },
  ];
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
    />
  );
};

export default PieChartComp;
