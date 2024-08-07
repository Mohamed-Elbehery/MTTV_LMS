import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Introduction from "../pages/Introduction";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
