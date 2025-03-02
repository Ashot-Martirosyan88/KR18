import { NavLink } from 'react-router-dom'
import './Cart.css'

function Cart(props) {
	return (
		<div className='cart-container'>
			{props.cartItems.length === 0 ? (
				<p className='cart-empty'>Your cart is empty.</p>
			) : (
				<>
					<div className='cart-items'>
						{props.cartItems.map(item => {
							const itemTotalPrice = (item.price * item.quantity).toFixed(2)

							return (
								<div key={item.id} className='cart-item'>
									<NavLink
										to={`/product/${item.id}`}
										className='cart-item-link'
									>
										<h2 className='cart-item-title'>{item.title}</h2>
										<img
											src={item.image}
											alt=''
											width={100}
											className='cart-item-image'
										/>
									</NavLink>
									<p className='cart-item-price'>
										${itemTotalPrice} +${item.price}
									</p>
									<div className='quantity-controls'>
										<button
											onClick={() => props.decreaseQuantity(item.id)}
											className='quantity-btn'
										>
											-
										</button>
										<span className='quantity-count'>{item.quantity}</span>
										<button
											onClick={() => props.increaseQuantity(item.id)}
											className='quantity-btn'
										>
											+
										</button>
									</div>
									<button
										onClick={() => props.removeFromCart(item.id)}
										className='remove-item-btn'
									>
										Remove
									</button>
								</div>
							)
						})}
					</div>
					<div className='cart-summary'>
						<h3 className='total-price'>
							Total Price: ${props.totalPrice.toFixed(2)}
						</h3>
						<button onClick={props.clearCart} className='clear-cart-btn'>
							Clear Cart
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default Cart
