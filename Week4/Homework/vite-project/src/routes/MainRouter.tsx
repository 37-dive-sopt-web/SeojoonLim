import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import MyPage from "../pages/MyPage/MyPage";
import Members from "../pages/Members/Members";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/mypage",
    element: <MainLayout />,
    children: [
      { index: true, element: <MyPage /> },
      { path: "member", element: <Members /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
]);


export default MainRouter;