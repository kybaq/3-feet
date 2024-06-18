import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import MyPage from "../pages/MyPage/MyPage";
import HomePage from "../pages/HomePage";



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
    // element: <Map />,
    // children: [
    //   {
    //     path: "/detail/:id",
    //     // element: <DetailPage />,
    //   },
    // ],
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
]);

export default router;
