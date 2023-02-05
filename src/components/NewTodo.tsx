import React, { useRef } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const todoTextInputRef = useRef<HTMLTextAreaElement>(null)
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()

		const enteredText = todoTextInputRef.current!.value
		if (enteredText.trim().length === 0) {
			// error
			return
		}
		props.onAddTodo(enteredText)
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<TextField
				className={classes.input}
				color='secondary'
				label='Todo text:'
				type='text'
				id='text'
				inputRef={todoTextInputRef}
			/>
			<Button
				className={classes.button}
				variant='contained'
				onClick={submitHandler}>
				Add Todo
			</Button>
		</form>
	)
}

export default NewTodo
