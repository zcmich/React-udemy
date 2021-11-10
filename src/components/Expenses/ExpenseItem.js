import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";     
import "./ExpenseItem.css";



// function ExpenseItem(props) {
  const ExpenseItem = (props) => {
    const clickHandler = () => {
      console.log('Clicked!!!');
    }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />   
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
