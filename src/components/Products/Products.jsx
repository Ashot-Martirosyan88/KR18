import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ContentLoader from 'react-content-loader'
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

	const ProductSkeleton = () => (
		<ContentLoader
			speed={2}
			width={280}
			height={400}
			viewBox='0 0 280 400'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			{/* Title */}
			<rect x='30' y='20' rx='3' ry='3' width='220' height='20' />
			<rect x='55' y='50' rx='3' ry='3' width='170' height='20' />

			{/* Image */}
			<rect x='80' y='100' rx='4' ry='4' width='120' height='120' />

			{/* Price */}
			<rect x='115' y='240' rx='3' ry='3' width='50' height='25' />

			{/* Buy button */}
			<rect x='45' y='290' rx='4' ry='4' width='190' height='38' />

			{/* View details button */}
			<rect x='45' y='340' rx='4' ry='4' width='190' height='38' />
		</ContentLoader>
	)

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
