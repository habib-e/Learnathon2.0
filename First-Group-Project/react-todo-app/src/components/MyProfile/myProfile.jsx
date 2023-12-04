// import React from 'react'

// export const MyProfile = () => {
//   return (
//     <div>
//         <div>
//             <h1>Welcome to My Profile</h1>

//         </div>
//     </div>
//     // <div>Welcome Profile</div>
//   )
// }

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "../LogoutButton";

const User = {
    family_name: "Habibullah",
    nickname : "Habib",
    Name : "Habibullah",
    Picture : "https://lh3.googleusercontent.com/a-/AOh14Gg1H2CJyfDl0I7k9gQy4wz2X0K1JZd9gQ2f7f2H=s96-c",
    Locale : "en",
    UpdatedAt : "2021-08-16T12:00:00.000Z",
    email_verified : true,
}

export const MyProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className="text-lg space-y-3">
        <div className="flex justify-between">
        <img src={user.picture} className="rounded-full" alt={user.name} />
        <LogoutButton></LogoutButton>

        </div>
        <div className="space-y-2">
          <div className="font-bold">Given Name: {user.given_name}</div>
          <div className="font-bold">Family Name: {User.family_name}</div>
          <div className="font-bold">Nick Name: {User.nickname}</div>
          <div className="font-bold">Name: {User.Name}</div>
          <div className="font-bold">Picture: {User.Picture}</div>
          <div className="font-bold">Locale: {User.Locale}</div>
          <div className="font-bold">Updated At: {User.UpdatedAt}</div>
          <div className="font-bold">Email Varified: {User.email_verified}</div>
          <div className="font-bold">Email: {user.email}</div>
        
        </div>
      </div>
    )
  );
};
