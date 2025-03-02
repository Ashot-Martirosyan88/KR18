import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ProductSkeleton from '../../../public/assets/contentLoader/ProductSkeleton.jsx'
import './Products.css'

function Products(props) {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => {
				setProducts(data)
				setIsLoading(false)
			})
			.catch(error => {
				console.error('Error fetching products:', error)
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			{isLoading ? (
				<div className='products-container skeleton-container'>
					{[...Array(20)].map((_, index) => (
						<div className='skeleton-item' key={index}>
							<ProductSkeleton />
						</div>
					))}
				</div>
			) : (
				<div className='products-container'>
					{products.map(product => (
						<div className='product-item' key={product.id}>
							<h2 className='product-item-title'>{product.title}</h2>
							<img
								className='product-item-img'
								src={product.image}
								alt={product.title}
								width={100}
							/>
							<p className='product-item-price'>${product.price}</p>
							<button
								className='product-item-btn'
								onClick={() => props.addToCart(product)}
							>
								Buy
							</button>
							<NavLink
								className='product-item-btn2'
								to={`/product/${product.id}`}
							>
								View Details
							</NavLink>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default Products
