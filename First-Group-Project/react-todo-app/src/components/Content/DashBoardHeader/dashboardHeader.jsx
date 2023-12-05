import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../LogoutButton";

// export default function DashboardHeader() {
//   return (
//     <div className="flex justify-between space-y-4 items-center">
//       <div className="text-3xl">
//         Welcome to
//         <span className="font-semibold">&nbsp;Learnathon2.0</span>
//       </div>
//     </div>
//   );
// }


export default function DashboardHeader() {
	 const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
   return (
	 isAuthenticated && (
       <div className="flex justify-between space-y-4 items-center">
           <div className="flex-grow text-3xl text-center">
               Welcome to 
               <span className="font-semibold">
                  &nbsp;Learnathon2.0
               </span>
           </div>
		   <LogoutButton></LogoutButton>
       </div>
	 )
   );
}