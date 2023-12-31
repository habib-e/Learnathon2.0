import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { appendTodo, completeTodo, getCompletedTodos, getDueTodos, deleteTodo } from './storage/data';
import { useAuth0 } from '@auth0/auth0-react';
// Font Awesome Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { appendTodo, completeTodo, deleteTodo, getCompletedTodos, getDueTodos } from '../../../Helper/todo';

const TodoTask = () => {
	const { user, isAuthenticated,isLoading, logout } = useAuth0();

	const [dueTodos, setDueTodos] = useState(getDueTodos(user?.name));
	const [completedTodos, setCompletedTodos] = useState(getCompletedTodos(user?.name));
	const inputRef = useRef(null);

	const addTask = () => {
		const inputValue = inputRef.current.value;
		appendTodo(user?.name, inputValue);
		setDueTodos(getDueTodos(user?.name));
		inputRef.current.value = "";
	}

	const completeTask = (id) => {
		completeTodo(user?.name, id);
		setDueTodos(getDueTodos(user?.name));
		setCompletedTodos(getCompletedTodos(user?.name));
	}

	const deleteTask = id => {
		console.log(id);
		deleteTodo(user?.name, id);
		setCompletedTodos(getCompletedTodos(user?.name));
	}

	useEffect(() => {
		setDueTodos(getDueTodos(user?.name));
		setCompletedTodos(getCompletedTodos(user?.name));
	}, [user?.name]);


	return (
		<div className=" w-full h-screen bg-slate-800 p-10 rounded-xl mb-20">
			<div className="bg-slate-600 mb-5 flex justify-between items-center">
				<div className="text-4xl font-semibold text-slate-200 ">To-Do List</div>
				
			</div>
			<div className="w-full flex justify-between items-center">
				<input ref={inputRef} type="text" className='w-10/12 text-slate-600 bg-slate-200 py-3 px-6 focus:outline-none text-lg font-medium rounded-l-sm rounded-r-none placeholder:text-slate-400' placeholder='Enter your task ' />
				<button onClick={() => addTask()} className='w-64 font-semibold rounded-r-sm text-lg bg-slate-900 text-slate-200 p-3' type='submit'>Add Task</button>
			</div>
			<div className="text-xl font-semibold my-3  bg-slate-900 text-slate-200 p-3 pl-5 rounded-sm">
				Due Tasks
			</div>
			<div className="space-y-2">
				{
					dueTodos.map((item) => {
						return (
							<div key={item.id} className='bg-slate-400 text-slate-900 py-3 px-6 flex justify-between item-center rounded-sm'>
								<div className='font-medium'>{item.task}</div>
								<div className='text-md cursor-pointer' onClick={() => completeTask(item.id)} ><FontAwesomeIcon icon={faSquare} /></div>
							</div>
						)
					})
				}
			</div>
			<div className="text-xl font-semibold my-3  bg-slate-900 text-slate-200 p-3 pl-5 rounded-sm">
				Completed Tasks
			</div>
			<div className="space-y-2">
				{
					completedTodos.map((item) => {
						return (
							<div key={item.id} className='bg-slate-400 text-slate-900 py-3 px-6 flex justify-between item-center rounded-sm'>
								<div className='line-through font-medium opacity-70'>{item.task}</div>
								<button onClick={() => deleteTask(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default TodoTask;