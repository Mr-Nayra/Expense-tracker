import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";

let a=2020;

function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const filterChangeHandler = (selectedYear) => {
    a=selectedYear;
    setFilteredYear(selectedYear);

  };

  let expenses=props.expenses.filter(expense => expense.date.getFullYear()==a);
  console.log(expenses);
  return (<Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {expenses.map(expense => <ExpenseItem key={expense.id} expenseTitle={expense.title} expenseAmount={expense.amount} date={expense.date}/>)}
  </Card>);
}

export default Expenses;
