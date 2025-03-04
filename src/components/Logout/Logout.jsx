import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function Logout({ logout, user }) {
	const navigate = useNavigate()

	// Схема валидации с помощью Yup
	const validationSchema = Yup.object({
		username: Yup.string()
			.required('Username is required')
			.oneOf([user.username], 'Incorrect username'), // Проверка, совпадает ли логин
		password: Yup.string()
			.required('Password is required')
			.oneOf([user.password], 'Incorrect password'), // Проверка, совпадает ли пароль
	})

	const handleSubmit = values => {
		// Если данные совпали, выходим из системы
		logout()
		navigate('/')
	}

	return (
		<div className='logout-container'>
			<h2>Logout</h2>
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div>
						<Field
							type='text'
							name='username'
							placeholder='Username'
							className='input'
						/>
						<ErrorMessage name='username' component='div' className='error' />
					</div>
					<div>
						<Field
							type='password'
							name='password'
							placeholder='Password'
							className='input'
						/>
						<ErrorMessage name='password' component='div' className='error' />
					</div>
					<button type='submit'>Log Out</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Logout
