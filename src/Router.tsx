import Home from "@src/pages/Home/Home";
import Main from "@src/pages/Main/Main";
import { createBrowserRouter } from "react-router-dom";

import ChatBotLayout from "@src/components/Chat/ChatBotLayout";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: (
      <ChatBotLayout>
        <Main />
      </ChatBotLayout>
    ),
  },
]);
