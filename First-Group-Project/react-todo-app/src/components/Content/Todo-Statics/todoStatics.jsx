import React from 'react'
import { allTodosCount, getCompletedTodos, getDueTodos } from '../../../Helper/todo'
import { useAuth0 } from '@auth0/auth0-react';

export const TodoStatics = () => {
    const { user, isLoading } = useAuth0();
    if (isLoading) {
		return <div>Loading ...</div>;
	}

  return (
 
			<div className="flex justify-between text-2xl pt-4">
				<div className="text-blue-300">
					Total Task: {allTodosCount(user.name)}
				</div>
				<div className="text-green-300">
					Completed Task: {getCompletedTodos(user.name).length}
				</div>
				<div className="text-red-300">
					Due Task: {getDueTodos(user.name).length}
				</div>
			</div>
  )
}
