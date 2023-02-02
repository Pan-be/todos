import Tasks from "./components/Tasks"
import Task from "./models/task"

import "./App.css"

const tasks = [new Task("Learn TypeScript"), new Task("Learn Next.js")]

function App() {
	return (
		<div className='App'>
			<Tasks items={tasks} />
		</div>
	)
}

export default App
