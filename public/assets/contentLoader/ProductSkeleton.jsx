import ContentLoader from 'react-content-loader'

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

export default ProductSkeleton
