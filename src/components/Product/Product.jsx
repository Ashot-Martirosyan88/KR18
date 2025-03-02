import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailSkeleton from '../../../public/assets/contentLoader/ProductDetailSkeleton.jsx'
import './Product.css'

function Product({ addToCart }) {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then(res => res.json())
			.then(data => {
				setProduct(data)
				setIsLoading(false)
			})
			.catch(error => {
				console.error('Error fetching product:', error)
				setIsLoading(false)
			})
	}, [id])



	return (
		<>
			{isLoading ? (
				<div className='product-skeleton'>
					<ProductDetailSkeleton />
				</div>
			) : (
				<div className='product'>
					<h1 className='product-title'>{product.title}</h1>
					<img
						className='product-img'
						src={product.image}
						alt={product.title}
						width={100}
					/>
					<p className='product-description'>{product.description}</p>
					<p className='product-price'>Price: ${product.price}</p>
					<button className='product-btn' onClick={() => addToCart(product)}>
						Add to Cart
					</button>
				</div>
			)}
		</>
	)
}

export default Product
