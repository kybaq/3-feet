import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import HomePage from "../pages/HomePage/HomePage";
import MyPage from "../pages/MyPage/MyPage";
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
    children: [
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
]);

export default router;
