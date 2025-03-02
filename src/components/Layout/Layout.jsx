import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './Layout.css'
import Footer from '../Footer/Footer'

function Layout({ cartItems }) {
	return (
		<>
			<div className='layout'>
				<Nav cartItems={cartItems} />
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default Layout
