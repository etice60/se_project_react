// import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import Profile from "../Profile/Profile";
// import { useContext } from "react";

function ProtectedRoute({ isLoggedIn, children, ...props }) {
  console.log({ isLoggedIn, children });
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}

export default ProtectedRoute;
