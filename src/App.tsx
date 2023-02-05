import Tasks from "./components/Tasks"
import Task from "./models/task"

import "./App.css"
import NewTodo from "./components/NewTodo"
import { useState } from "react"
import Todo from "./components/Todo"

function App() {
	const [tasks, setTasks] = useState<Task[]>([])

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Task(todoText)
		setTasks((prevTodo) => {
			return prevTodo.concat(newTodo)
		})
	}

	return (
		<div className='App'>
			<NewTodo onAddTodo={addTodoHandler} />
			<Tasks items={tasks} />
		</div>
	)
}

export default App
