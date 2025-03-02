// routes/index.js
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import TrendingPage from "../pages/TrendingPage";
import TokenPage from "../pages/TokenPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <TrendingPage />,
      },
      {
        path: "/:chain/:address",
        element: <TokenPage />,
      },
    ],
  },
]);
