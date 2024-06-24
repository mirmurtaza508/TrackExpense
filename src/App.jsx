import FormExpense from "../components/FormExpense";
import TableExpense from "../components/TableExpense";
import "./App.css";
import expensesData from "../expense";
import useLocalStorage from "../hooks/useLocalStorage";
import PieChartComp from "../components/PieChartComp";
import ExpenseBarChart from "../components/BarChart";

const App = () => {
  const [expenses, setExpenses] = useLocalStorage("expenses", expensesData);
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <FormExpense
          setExpenses={setExpenses}
          expenses={expenses}
          setExpense={setExpense}
          expense={expense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <TableExpense
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
      </div>
      <div
        style={{ padding: "1rem", display: "flex", justifyContent: "center" }}
      >
        <PieChartComp expenses={expenses} />
      </div>
      <div>
        <ExpenseBarChart expenses={expenses} />
      </div>
    </main>
  );
};

export default App;
