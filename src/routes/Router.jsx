import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import NotFoundPage from "../pages/errorPages/NotFoundPage";
import HomePage from "../pages/rootPages/HomePage";
import SignUp from "../pages/rootPages/SignUp";
import SignIn from "../pages/rootPages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
]);

export default router;
