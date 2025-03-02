import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import Todos from './components/Todos/Todos'

import './App.css'

function App() {
	const [cartItems, setCartItems] = useState([])

	// addToCart
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

	// removeFromCart
	const removeFromCart = productId => {
		setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
	}

	// increaseQuantity
	const increaseQuantity = productId => {
		setCartItems(prevItems =>
			prevItems.map(item =>
				item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
			)
		)
	}

	//decreaseQuantity
	const decreaseQuantity = productId => {
		setCartItems(prevItems =>
			prevItems.map(item =>
				item.id === productId && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		)
	}

	// clearCart
	const clearCart = () => {
		setCartItems([])
	}

	// totalPrice
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Layout cartItems={cartItems} />}>
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
				</Route>
			</Routes>
		</div>
	)
}

export default App
