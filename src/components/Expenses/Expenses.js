import React from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

let a = 2020;

function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const filterChangeHandler = (selectedYear) => {
    a = selectedYear;
    setFilteredYear(selectedYear);
  };

  let expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == a
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
    <ExpensesChart expenses={expenses}/>
      <ExpensesList expenses={expenses} />
    </Card>
  );
}

export default Expenses;
