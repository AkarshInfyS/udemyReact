import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
const Expenses= (props) => {
    return(
        <Card className="expenses">
            <ExpenseItem title={props.expensesList[0].title} date={props.expensesList[0].date} amount={props.expensesList[0].amount} />
      <ExpenseItem title={props.expensesList[1].title} date={props.expensesList[1].date} amount={props.expensesList[1].amount} />
      <ExpenseItem title={props.expensesList[2].title} date={props.expensesList[2].date} amount={props.expensesList[2].amount} />
      <ExpenseItem title={props.expensesList[3].title} date={props.expensesList[3].date} amount={props.expensesList[3].amount} />
        </Card>
    )
}
export default Expenses