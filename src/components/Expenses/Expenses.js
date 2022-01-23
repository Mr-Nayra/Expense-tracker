import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
  };

  return (<Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {props.expenses.map(expense => <ExpenseItem expenseTitle={expense.title} expenseAmount={expense.amount} date={expense.date}/>)}
  </Card>);
}

export default Expenses;
