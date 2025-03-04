import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import Todos from './components/Todos/Todos'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Profile from './components/Profile/Profile'

import './App.css'

function App() {
	const [cartItems, setCartItems] = useState([])
	const [users, setUsers] = useState([]) // Массив пользователей
	const [user, setUser] = useState(null) // Активный пользователь
	const [error, setError] = useState('') // Для отображения ошибок

	// Добавление товара в корзину
	const addToCart = product => {
		setCartItems(prevItems => {
			const itemExists = prevItems.find(item => item.id === product.id)
			if (itemExists) {
				return prevItems.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			} else {
				return [...prevItems, { ...product, quantity: 1 }]
			}
		})
	}

	// Удаление товара из корзины
	const removeFromCart = productId => {
		setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
	}

	// Увеличение количества товара
	const increaseQuantity = productId => {
		setCartItems(prevItems =>
			prevItems.map(item =>
				item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
			)
		)
	}

	// Уменьшение количества товара
	const decreaseQuantity = productId => {
		setCartItems(prevItems => {
			const updatedItems = prevItems
				.map(item =>
					item.id === productId && item.quantity > 0
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter(item => item.quantity > 0)
			return updatedItems
		})
	}

	// Очистка корзины
	const clearCart = () => {
		setCartItems([])
	}

	// Рассчет общей стоимости
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	// Регистрация пользователя
	const registerUser = userData => {
		const newUser = { ...userData, isLoggedIn: false }
		setUsers(prevUsers => [...prevUsers, newUser]) // Добавляем нового пользователя в массив
	}

	// Вход пользователя
	const loginUser = userData => {
		const existingUser = users.find(
			u => u.username === userData.username && u.password === userData.password
		)

		if (existingUser) {
			const updatedUser = { ...existingUser, isLoggedIn: true }
			setUsers(prevUsers =>
				prevUsers.map(u =>
					u.username === updatedUser.username ? updatedUser : u
				)
			)
			setUser(updatedUser) // Устанавливаем активного пользователя
			setError('') // Очистка ошибки
		} else {
			setError('Неверное имя пользователя или пароль') // Ошибка, если пользователь не найден
		}
	}

	// Выход пользователя
	const logoutUser = () => {
		const updatedUser = { ...user, isLoggedIn: false }
		setUsers(prevUsers =>
			prevUsers.map(u =>
				u.username === updatedUser.username ? updatedUser : u
			)
		)
		setUser(null) // Убираем активного пользователя
	}

	return (
		<div className='app'>
			{error && <div className='error'>{error}</div>} {/* Отображение ошибки */}
			<Routes>
				<Route
					path='/'
					element={
						<Layout cartItems={cartItems} user={user} logout={logoutUser} />
					}
				>
					<Route index element={<Home />} />
					<Route path='/todos' element={<Todos />} />
					<Route
						path='/products'
						element={<Products addToCart={addToCart} />}
					/>
					<Route
						path='/product/:id'
						element={<Product addToCart={addToCart} />}
					/>
					<Route
						path='/cart'
						element={
							<Cart
								cartItems={cartItems}
								increaseQuantity={increaseQuantity}
								decreaseQuantity={decreaseQuantity}
								removeFromCart={removeFromCart}
								clearCart={clearCart}
								totalPrice={totalPrice}
							/>
						}
					/>
					<Route
						path='/register'
						element={<Register register={registerUser} />}
					/>
					<Route path='/login' element={<Login login={loginUser} />} />
					<Route
						path='/logout'
						element={<Logout logout={logoutUser} user={user} />}
					/>
					<Route path='/profile' element={<Profile user={user} />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
