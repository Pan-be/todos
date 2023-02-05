import React from "react"
import Task from "../models/task"
import Todo from "./Todo"
import classes from "./Tasks.module.css"

const Tasks: React.FC<{ items: Task[] }> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<Todo key={item.id} text={item.text} />
			))}
		</ul>
	)
}

export default Tasks
