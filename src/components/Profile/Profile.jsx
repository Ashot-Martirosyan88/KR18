import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({ user }) {
	const navigate = useNavigate()

	useEffect(() => {
		// Redirect to login if not logged in
		if (!user) {
			navigate('/login')
		}
	}, [user, navigate])

	if (!user) {
		return <div>You must be logged in to view your profile.</div>
	}

	return (
		<div className='profile-container'>
			<h1>Profile</h1>
			<div className='profile-info'>
				<p>
					<strong>Username:</strong> {user.username}
				</p>
				<p>
					<strong>Email:</strong> {user.email}
				</p>
				{user.age && (
					<p>
						<strong>Age:</strong> {user.age}
					</p>
				)}
			</div>
		</div>
	)
}

export default Profile
