import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = ({ login }) => {
	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		password: Yup.string().required('Password is required'),
	})

	const initialValues = {
		username: '',
		password: '',
	}

	return (
		<div>
			<h2>Login</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={values => {
					// Call the login function with form values
					login(values)
				}}
			>
				<Form>
					<div>
						<Field type='text' name='username' placeholder='Username' />
						<ErrorMessage name='username' component='div' className='error' />
					</div>
					<div>
						<Field type='password' name='password' placeholder='Password' />
						<ErrorMessage name='password' component='div' className='error' />
					</div>
					<button type='submit'>Login</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Login
