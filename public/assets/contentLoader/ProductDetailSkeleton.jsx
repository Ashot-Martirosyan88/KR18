import ContentLoader from 'react-content-loader'

const ProductDetailSkeleton = () => (
	<ContentLoader
		speed={2}
		width={800}
		height={500}
		viewBox='0 0 800 500'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		{/* Title */}
		<rect x='100' y='20' rx='3' ry='3' width='600' height='30' />

		{/* Image */}
		<rect x='300' y='80' rx='4' ry='4' width='200' height='200' />

		{/* Description */}
		<rect x='150' y='310' rx='3' ry='3' width='500' height='15' />
		<rect x='150' y='335' rx='3' ry='3' width='500' height='15' />
		<rect x='150' y='360' rx='3' ry='3' width='500' height='15' />
		<rect x='150' y='385' rx='3' ry='3' width='300' height='15' />

		{/* Price */}
		<rect x='350' y='430' rx='3' ry='3' width='100' height='25' />

		{/* Add to Cart button */}
		<rect x='300' y='470' rx='4' ry='4' width='200' height='40' />
	</ContentLoader>
)

export default ProductDetailSkeleton