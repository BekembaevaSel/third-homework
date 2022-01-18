import { useState } from 'react'
import React from 'react'

const Form = () => {
	// const [name, setName] = useState('')
	// const [phone, setPhone] = useState('')
	// const [email, setEmail] = useState('')

	// const nameChangeHandler = (event) => {
	// 	setName(event.target.value)
	// }

	// const phoneChangeHandler = (event) => {
	// 	setPhone(event.target.value)
	// }

	// const emailChangeHandler = (event) => {
	// 	setEmail(event.target.value)
	// }

	const submitHandler = (event) => {
		event.preventDefault()
		console.log(userInput);
		
	}

	const [userInput, setUserInput] = useState({
		userName: '',
		userNumber: '',
		userEmail: '',
	})

	const nameChangeHandler = (event) => {
		setUserInput({
			...userInput,
			userName: event.target.value
		})
	}

	const numberChangeHandler = (event) => {
		setUserInput({
			...userInput,
			userNumber:event.target.value
		})
	}

	const emailChangeHandler = (event) => {
		setUserInput({
			...userInput,
			userEmail:event.target.value
		})


	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<div>
					<label>
						<input name='userName' type='text' onChange={nameChangeHandler} />
					</label>
				</div>
				<div>
					<label>
						<input name='userNumber' type='number' onChange={numberChangeHandler} />
					</label>
				</div>
				<div>
					<label>
						<input name='userEmail' type='email' onChange={emailChangeHandler} />
					</label>
				</div>
			</div>
			<button onSubmit={submitHandler}>Add</button>
		</form>
	)
}
export default Form
