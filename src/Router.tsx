import Home from "@src/Pages/Home/Home";
import Main from "@src/Pages/Main/Main";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Main />,
  },
]);
