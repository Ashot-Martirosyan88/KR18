import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import './App.css'

function App() {
	return (
		<>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/todos' element={<Todos />} />
					</Route>
				</Routes>
			</div>
		</>
	)
}

export default App
