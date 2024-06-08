import React, { useState } from "react";
import FormExpense from '../components/FormExpense'
import TableExpense from '../components/TableExpense'
import expenseData from "../expense";
import './App.css'
import useLocalStorage from "../hooks/useLocalStorage";


const App = () => {
  const [expenses, setExpenses] = useLocalStorage("expenses",expenseData)
  const [editingRowId,setEditingRowId] = useLocalStorage("editingRowId","")
  const [expense, setExpense] = useLocalStorage("expense",{
    title: "",
    category: "",
    amount: "",
  });

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <FormExpense setExpenses={setExpenses}  expenses={expenses} setExpense={setExpense} expense={expense} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
        <TableExpense expenses={expenses}  setExpenses={setExpenses} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId} />
      </div>
    </main>
  );
};

export default App;
