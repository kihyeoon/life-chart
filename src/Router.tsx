import Home from "@src/pages/Home/Home";
import Main from "@src/pages/Main/Main";
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
