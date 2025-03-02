import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './Layout.css'

function Layout() {
	return (
		<>
			<div className='layout'>
				<Nav />
				<Outlet />
			</div>
		</>
	)
}

export default Layout
