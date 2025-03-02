import { Formik, Field, Form, ErrorMessage } from 'formik'
import { NavLink } from 'react-router-dom'
import navSchema from '../../../public/assets/schema/navSchema'
import { GoMoveToStart, GoMoveToEnd } from 'react-icons/go'
import { LuListTodo } from 'react-icons/lu'
import './Nav.css'

function Nav() {
	return (
		<>
			<nav className='nav'>
				<Formik
					validationSchema={navSchema}
					initialValues={{ search: '' }}
					onSubmit={values => console.log('search ' + values)}
				>
					<Form className='nav-container'>
						<div className='nav-items'>
							<NavLink to={-1} className='nav-back'>
								<GoMoveToStart />
							</NavLink>
							<NavLink to={+1} className='nav-forward'>
								<GoMoveToEnd />
							</NavLink>
							<NavLink className='nav-logo' to='/'>
								<img
									className='nav-logo'
									src={'../../../public/assets/images/logo.png'}
									alt=''
									width={100}
								/>
							</NavLink>

							<Field
								name='search'
								type='search'
								className='search'
								placeholder='Search...'
							/>
							<p className='search-error'>
								<ErrorMessage name='search' />
							</p>
						</div>
						<div className='nav-links'>
							<NavLink to={'/todos'} className='nav-link'>
								<LuListTodo />
							</NavLink>
						</div>
						<div className='nav-btns'></div>
					</Form>
				</Formik>
			</nav>
		</>
	)
}

export default Nav
