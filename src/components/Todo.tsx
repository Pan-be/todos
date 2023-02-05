import Task from "../models/task"
import classes from "./Todo.module.css"

const Todo: React.FC<{ text: string }> = (props) => {
	return (
		<li className={classes.item}>
			<span>{props.text}</span>
			<span>x</span>
		</li>
	)
}

export default Todo
