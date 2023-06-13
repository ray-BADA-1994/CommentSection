import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const PrivateRoute = () => {
  const { token } = useContext(GlobalContext);

  console.log(token);

  return token === null ? <Navigate to={"/"} /> : <Outlet />;
};

export default PrivateRoute;
