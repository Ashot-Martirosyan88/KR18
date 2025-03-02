import { Formik, Field, Form, ErrorMessage } from 'formik'
import { NavLink } from 'react-router-dom'
import navSchema from '../../../public/assets/schema/navSchema'
import { GoMoveToStart, GoMoveToEnd } from 'react-icons/go'
import { LuListTodo } from 'react-icons/lu'
import { SiShopify } from 'react-icons/si'
import { TiShoppingCart } from 'react-icons/ti'
import './Nav.css'

function Nav({ cartItems }) {
	const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

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
							<NavLink to='/products' className='nav-link'>
								<SiShopify />
							</NavLink>
							<NavLink to='/cart' className='nav-link'>
								<TiShoppingCart />
								<sub>{totalItems}</sub>
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
