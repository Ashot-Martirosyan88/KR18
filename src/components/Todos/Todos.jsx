import React, { useState, useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TodoSkeleton from '../../../public/assets/contentLoader/TodoSkeleton'
import './Todos.css'

function Todos() {
	const [todos, setTodos] = useState([])
	const [loading, setLoading] = useState(true)
	const [editingId, setEditingId] = useState(null)
	const [editTask, setEditTask] = useState('')
	const [deletingId, setDeletingId] = useState(null)

	const basicUrl = 'https://jsonplaceholder.typicode.com/'

	useEffect(() => {
		fetch(`${basicUrl}todos?_limit=20`)
			.then(res => res.json())
			.then(data => {
				setTimeout(() => {
					setTodos(data)
					setLoading(false)
				}, 800)
			})
			.catch(error => {
				console.error('Error fetching todos:', error)
				setLoading(false)
			})
	}, [])

	const handleDeleteTask = id => {
		setDeletingId(id)

		setTimeout(() => {
			setTodos(todos.filter(todo => todo.id !== id))
			setDeletingId(null)
		}, 300)
	}

	const handleToggleComplete = id => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}

	const handleEditClick = todo => {
		setEditingId(todo.id)
		setEditTask(todo.title)
	}

	const handleSaveEdit = () => {
		if (editTask.trim().length < 3) return

		setTodos(
			todos.map(todo =>
				todo.id === editingId ? { ...todo, title: editTask } : todo
			)
		)
		setEditingId(null)
		setEditTask('')
	}

	const cancelEdit = () => {
		setEditingId(null)
		setEditTask('')
	}

	const validationSchema = Yup.object({
		task: Yup.string()
			.min(3, 'Task must be at least 3 characters')
			.required('Task is required'),
	})

	const handleKeyDown = (e, action) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			action()
		}
	}

	return (
		<div className='todo-app'>
			<h1 className='todo-title'>Todo List</h1>

			<Formik
				initialValues={{ task: '' }}
				validationSchema={validationSchema}
				onSubmit={(values, { resetForm }) => {
					const newTodo = {
						id: Date.now(),
						title: values.task,
						completed: false,
					}

					setTodos([newTodo, ...todos])
					resetForm()
				}}
			>
				<Form className='todo-form'>
					<div className='input-container'>
						<Field
							type='text'
							name='task'
							placeholder='Add a new task'
							className='task-input'
							aria-label='Task description'
						/>
						<ErrorMessage
							name='task'
							component='div'
							className='error-message'
						/>
					</div>
					<button type='submit' className='submit-btn' aria-label='Add task'>
						Add Task
					</button>
				</Form>
			</Formik>

			{loading ? (
				<div className='loading-indicator'>
					<TodoSkeleton />
				</div>
			) : (
				<div className='todo-list'>
					{todos.length === 0 ? (
						<div className='empty-list'>
							<p>No tasks to display. Add a new task above!</p>
						</div>
					) : (
						todos.map(todo => (
							<div
								key={todo.id}
								className={`todo-item ${todo.completed ? 'completed' : ''} ${
									deletingId === todo.id ? 'deleting' : ''
								}`}
							>
								<div className='todo-content'>
									<label
										className='checkbox-container'
										aria-label={`Mark task ${
											todo.completed ? 'incomplete' : 'complete'
										}`}
									>
										<input
											type='checkbox'
											checked={todo.completed || false}
											onChange={() => handleToggleComplete(todo.id)}
										/>
										<span className='checkmark'></span>
									</label>

									{editingId === todo.id ? (
										<input
											type='text'
											value={editTask}
											onChange={e => setEditTask(e.target.value)}
											className='edit-input'
											autoFocus
											aria-label='Edit task'
										/>
									) : (
										<span className='todo-text'>{todo.title}</span>
									)}
								</div>

								<div className='todo-actions'>
									{editingId === todo.id ? (
										<>
											<button
												onClick={handleSaveEdit}
												className='save-btn'
												aria-label='Save changes'
												onKeyDown={e => handleKeyDown(e, handleSaveEdit)}
											>
												Save
											</button>
											<button
												onClick={cancelEdit}
												className='cancel-btn'
												aria-label='Cancel editing'
												onKeyDown={e => handleKeyDown(e, cancelEdit)}
											>
												Cancel
											</button>
										</>
									) : (
										<>
											<button
												onClick={() => handleEditClick(todo)}
												className='edit-btn'
												aria-label='Edit task'
												onKeyDown={e =>
													handleKeyDown(e, () => handleEditClick(todo))
												}
											>
												Edit
											</button>
											<button
												onClick={() => handleDeleteTask(todo.id)}
												className='delete-btn'
												aria-label='Delete task'
												onKeyDown={e =>
													handleKeyDown(e, () => handleDeleteTask(todo.id))
												}
											>
												Delete
											</button>
										</>
									)}
								</div>
							</div>
						))
					)}
				</div>
			)}
		</div>
	)
}

export default Todos
