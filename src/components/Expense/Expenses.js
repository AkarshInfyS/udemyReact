import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
const Expenses = (props) => {
  const [dropDownYear,setDropDownYear]=useState('2020')
  const saveYearHandler=(enteredYearData)=>{
      setDropDownYear(enteredYearData)
      console.log(enteredYearData)
      }
        
  return (
    <>     
      <Card className="expenses">
      <ExpensesFilter defaultYear={dropDownYear} onSelectYear={saveYearHandler} />
        <ExpenseItem
          title={props.expensesList[0].title}
          date={props.expensesList[0].date}
          amount={props.expensesList[0].amount}
        />
        <ExpenseItem
          title={props.expensesList[1].title}
          date={props.expensesList[1].date}
          amount={props.expensesList[1].amount}
        />
        <ExpenseItem
          title={props.expensesList[2].title}
          date={props.expensesList[2].date}
          amount={props.expensesList[2].amount}
        />
        <ExpenseItem
          title={props.expensesList[3].title}
          date={props.expensesList[3].date}
          amount={props.expensesList[3].amount}
        />
      </Card>
    </>
  );
};
export default Expenses;
