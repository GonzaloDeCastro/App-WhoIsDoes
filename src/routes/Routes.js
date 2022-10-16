import { Navigate } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Menu from "../pages/menu/Menu";
import RouteProtector from "./RouteProtector";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register to="/register" />,
  },
  {
    path: "/menu",
    element: (
      <RouteProtector>
        <Menu to="/menu" />
      </RouteProtector>
    ),
  },
];
