import { Formik, Field, Form, ErrorMessage } from 'formik'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'
import { GoMoveToStart, GoMoveToEnd } from 'react-icons/go'
import { LuListTodo } from 'react-icons/lu'
import { SiShopify } from 'react-icons/si'
import { TiShoppingCart } from 'react-icons/ti'
import './Nav.css'

function Nav({ cartItems, user, logout }) {
	const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

	// Схема валидации для поиска с использованием Yup
	const validationSchema = Yup.object().shape({
		search: Yup.string()
			.min(3, 'Search term must be at least 3 characters')
			.required('Search term is required'),
	})

	return (
		<nav className='nav'>
			<Formik
				initialValues={{ search: '' }}
				validationSchema={validationSchema}
				onSubmit={values => console.log('search ' + values.search)} // Обработка поиска
			>
				{() => (
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
									src='/assets/images/logo.png'
									alt='Logo'
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
								Todo
							</NavLink>
							<NavLink to='/products' className='nav-link'>
								<SiShopify />
								Products
							</NavLink>
							<NavLink to='/cart' className='nav-link'>
								<TiShoppingCart />
								Cart
								<sub>{totalItems}</sub>
							</NavLink>

							{user ? (
								<>
									<NavLink to='/logout' className='nav-link' onClick={logout}>
										Logout
									</NavLink>
								</>
							) : (
								<>
									<NavLink to='/register' className='nav-link'>
										Register
									</NavLink>
									<NavLink to='/login' className='nav-link'>
										Login
									</NavLink>
								</>
							)}

							<NavLink to='/profile' className='nav-link'>
								Profile
							</NavLink>
						</div>
					</Form>
				)}
			</Formik>
		</nav>
	)
}

export default Nav
