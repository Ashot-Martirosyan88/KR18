import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './Layout.css'

function Layout({ cartItems, user, logout }) {
	return (
		<div className='layout'>
			<Nav cartItems={cartItems} user={user} logout={logout} />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
