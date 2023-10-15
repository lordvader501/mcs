import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/page/HomePage";
import UsersInfoPage from "../components/page/UsersInfoPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/user/:id",
        element: <UsersInfoPage />,
      },
    ],
  },
]);

export default routes;
