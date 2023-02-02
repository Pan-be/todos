import React from "react"
import Task from "../models/task"
import Todo from "./Todo"

const Tasks: React.FC<{ items: Task[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<Todo key={item.id} text={item.text} />
			))}
		</ul>
	)
}

export default Tasks
