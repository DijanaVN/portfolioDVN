import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import Layout from "../components/Layout";
import AboutPage from "./../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);
export default router;
