import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Register = ({ register }) => {
	const navigate = useNavigate()

	// Схема валидации с использованием Yup
	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
		age: Yup.number().positive('Age must be a positive number').nullable(),
	})

	const initialValues = {
		username: '',
		email: '',
		password: '',
		age: '',
	}

	return (
		<div>
			<h2>Register</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={values => {
					// Call the register function with form values
					register(values)
					alert('Registration successful!')
					navigate('/login')
				}}
			>
				<Form>
					<div>
						<Field type='text' name='username' placeholder='Username' />
						<ErrorMessage name='username' component='div' className='error' />
					</div>
					<div>
						<Field type='email' name='email' placeholder='Email' />
						<ErrorMessage name='email' component='div' className='error' />
					</div>
					<div>
						<Field type='password' name='password' placeholder='Password' />
						<ErrorMessage name='password' component='div' className='error' />
					</div>
					<div>
						<Field type='number' name='age' placeholder='Age' />
						<ErrorMessage name='age' component='div' className='error' />
					</div>
					<button type='submit'>Register</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Register
