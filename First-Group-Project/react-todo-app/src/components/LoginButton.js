import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    !isAuthenticated && (
      <div className="flex justify-center">
        <button
          onClick={() => {
            loginWithRedirect({});
          }}
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-2xl px-5 py-5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-fit ">
          Log in
        </button>
      </div>
    )
  );
};

export default LoginButton;
