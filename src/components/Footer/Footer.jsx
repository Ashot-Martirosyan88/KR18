import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { LuListTodo } from 'react-icons/lu'
import { SiShopify } from 'react-icons/si'
import { TiShoppingCart } from 'react-icons/ti'
import './Footer.css'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<div className='footer-logo'>
					<NavLink to='/'>
						<img src='/assets/images/logo.png' alt='Logo' width={100} />
					</NavLink>
				</div>
				<nav className='footer-nav'>
					<NavLink to={'/todos'} className='footer-link'>
						<LuListTodo />
					</NavLink>
					<NavLink to='/products' className='footer-link'>
						<SiShopify />
					</NavLink>
					<NavLink to='/cart' className='footer-link'>
						<TiShoppingCart />
					</NavLink>
				</nav>
				<div className='footer-social'>
					<a
						href='https://facebook.com'
						target='_blank'
						rel='noopener noreferrer'
						className='social-link'
					>
						<FaFacebookF />
					</a>
					<a
						href='https://twitter.com'
						target='_blank'
						rel='noopener noreferrer'
						className='social-link'
					>
						<FaTwitter />
					</a>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
						className='social-link'
					>
						<FaInstagram />
					</a>
				</div>
			</div>
			<p className='footer-copy'>
				&copy; {new Date().getFullYear()} Your Company. All rights reserved.
			</p>
		</footer>
	)
}

export default Footer
