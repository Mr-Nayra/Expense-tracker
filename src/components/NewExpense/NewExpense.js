import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpenseData from "./AddExpense";

const NewExpense = (props) => {
  const [check, setCheck] = React.useState(0);

  const changeCheck = () => {
    setCheck(check ^ 1);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    changeCheck();
  };

  let inputData;
  if (check == 0) {
    inputData = <AddExpenseData change={changeCheck} />;
  } else {
    inputData = (
      <ExpenseForm
        change={changeCheck}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{inputData}</div>;
};

export default NewExpense;
