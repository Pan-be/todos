import Tasks from "./components/Tasks"

import "./App.css"

function App() {
	return (
		<div className='App'>
			<Tasks items={["learn typescript", "learn next.js"]} />
		</div>
	)
}

export default App
