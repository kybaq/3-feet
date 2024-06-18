import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "./../pages/DetailPage/DetailPage";
import Map from "./../pages/Map/Map";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "map/detail/:id",
    element: <DetailPage />,
  },
]);

export default router;
