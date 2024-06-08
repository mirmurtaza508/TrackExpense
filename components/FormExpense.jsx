import React, { useRef, useState } from "react";
import Input from "./Input";
import Menu from "./Menu";

const FormExpense = ({
  setExpenses,
  editingRowId,
  setExpense,
  expense,
  expenses,
  setEditingRowId,
}) => {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "title is required" },
      { minLen: 4, message: "please enter atleast 4 Characters" },
    ],
    category: [{ required: true, message: "category is required" }],
    amount: [
      { required: true, message: "amount is required" },
      { pattern: /^-?\d*\.?\d*$/, message: "please enter a valid amount" },
    ],
  };
  const validation = (formData) => {
    const errorsData = {};
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLen && value.length < rule.minLen) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });
    setErrors(errorsData);
    return errorsData;
  };
  // console.log(errors)
  function handleSubmit(e) {
    e.preventDefault();
    const result = validation(expense);
    if (Object.keys(result).length) return;
    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return prevExpense;
        })
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setEditingRowId("");
      return;
    }
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      amount: "",
      category: "",
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Menu
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        error={errors.category}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="select Category"
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default FormExpense;
