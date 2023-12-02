import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}
  return (
		 isAuthenticated && (
			<div className="text-lg space-y-3 flex items-center justify-between">
				<div className="">
					<div>{user.name}</div>
					<div>{user.email}</div>
				</div>
				<img src={user.picture} className="rounded-full" alt={user.name} />
			</div>
		)
	);
}

