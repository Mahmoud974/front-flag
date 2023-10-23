import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Description from "./Description";
import ErrorPage from "./ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/description/:id",
    element: <Description />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);