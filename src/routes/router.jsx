import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SingUpPage";
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
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
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
  {
    path: "/mypage",
    element: <MyPage />,
  },
]);

export default router;
