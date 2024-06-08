import React from "react";

const ContextMenu = ({
  position,
  setExpenses,
  expenses,
  rowId,
  setPosition,
  setEditingRowId,
  setExpense,
}) => {
  if (!position.left) return;
  return (
    <div className="context-menu" style={{ ...position }}>
      <div
        onClick={() => {
          console.log("editing...");
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );
          setExpense({ title, category, amount });
          setEditingRowId(rowId);
          setPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={(e) => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
