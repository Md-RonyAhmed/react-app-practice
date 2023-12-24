import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import Users from "../pages/Users/Users";
import UserDetails from "../components/UserDetails/UserDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
// import fetchData from "../components/utils/fetchData";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: (
          <PrivateRoutes>
            <About />
          </PrivateRoutes>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "users",
        element: (
          <PrivateRoutes>
            <Users />
          </PrivateRoutes>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

export default routes;
