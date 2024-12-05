import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import AddUser from "../pages/AddUser";
import Post from "../pages/Post";

export const RootRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-user",
      element: <AddUser />,
    },
    {
      path: "/posts",
      element: <Post />,
    },
  ]);

  return <RouterProvider router={router} />;
};
