import React from "react"

const Tasks: React.FC<{ items: string[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	)
}

export default Tasks
