import { useState } from 'react'
import React from 'react'

const Form = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')

	const nameChangeHandler = (event) => {
		setName(event.target.value)
	}

    const phoneChangeHandler = (event) => {
        setPhone(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

	const submitHandler = (event) => {
		event.preventDefault()
		console.log(name)
        console.log(phone);
        console.log(email);
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<div>
					<label>
						<input type='text' onChange={nameChangeHandler} />
					</label>
				</div>
				<div>
					<label>
						<input type='number' onChange={phoneChangeHandler}/>
					</label>
				</div>
				<div>
					<label>
						<input type='email' onChange={emailChangeHandler} />
					</label>
				</div>
			</div>
			<button onSubmit={submitHandler}>Add</button>
		</form>
	)
}
export default Form
