import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import About from "./../pages/About";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "about", element: <About /> },
]);
export default router;
