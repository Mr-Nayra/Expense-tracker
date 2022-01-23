import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card"
import Date from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2> {props.expenseTitle}</h2>
        <div className="expense-item__price">$ {props.expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
