import React from "react"
import Task from "../models/task"
import Todo from "./Todo"
import classes from "./Tasks.module.css"

const Tasks: React.FC<{ items: Task[]; onRemoveTodo: (id: string) => void }> = (
	props
) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<Todo
					key={item.id}
					text={item.text}
					onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	)
}

export default Tasks
