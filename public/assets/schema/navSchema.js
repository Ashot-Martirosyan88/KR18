import * as YUP from 'yup'

const navSchema = YUP.object().shape({
	search: YUP.string()
		.min(2, 'You must exceed the minimum value')
		.max(100, 'You must not exceed the maximum value.'),
})

export default navSchema
