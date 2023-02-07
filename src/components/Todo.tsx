import Task from "../models/task"
import classes from "./Todo.module.css"

const Todo: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
	// const deleteHandler = () => {
	// 	props.onDeleteTodo(Todo)
	// }

	return (
		<li className={classes.item}>
			<span>{props.text}</span>
			<span onClick={props.onRemoveTodo}>x</span>
		</li>
	)
}

export default Todo
