import ContentLoader from 'react-content-loader'

const TodoSkeleton = () => (
	<ContentLoader
		speed={2}
		width={400}
		height={160}
		viewBox='0 0 400 160'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='0' y='0' rx='8' ry='8' width='350' height='25' />
		<rect x='0' y='35' rx='8' ry='8' width='380' height='25' />
		<rect x='0' y='70' rx='8' ry='8' width='330' height='25' />
		<rect x='0' y='105' rx='8' ry='8' width='380' height='25' />
		<rect x='0' y='140' rx='8' ry='8' width='350' height='25' />
	</ContentLoader>
)


export default TodoSkeleton