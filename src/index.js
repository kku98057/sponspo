import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/dashboard/DashBoard";
import SignUp from "./pages/sign/SignUp";
import Login from "./pages/sign/Login";
import Communication from "./pages/dashboard/common/Communication";
import CompletedConclusion from "./pages/dashboard/common/CompletedConclusion";
import NowProposal from "./pages/dashboard/common/NowProposal";
import RecommendedMatching from "./pages/dashboard/common/RecommendedMatching";
import Status from "./pages/dashboard/common/Status";
import Schedule from "./pages/dashboard/common/Schedule";
import ProposalProfile from "./pages/dashboard/common/profile/ProposalProfile";
import Contents from "./pages/dashboard/advertiser/Contents";
import PlayerProposal from "./pages/dashboard/advertiser/PlayerProposal";
import PlayerSearching from "./pages/dashboard/advertiser/PlayerSearching";
import UpdateProfile from "./pages/UpdateProfile";
import MyProfile from "./pages/dashboard/common/profile/MyProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>noet found</p>,
    children: [
      { index: true, element: <Home /> },
      // 대쉬보드
      {
        path: "dashboard",
        children: [
          { index: true, element: <DashBoard /> },
          // 커뮤니케이션
          { path: "communication", element: <Communication /> },
          // 체결완료
          { path: "conclusion", element: <CompletedConclusion /> },
          // 추천매칭
          { path: "matching/recommended", element: <RecommendedMatching /> },
          // 현재상테
          { path: "status", element: <Status /> },
          // 일정
          { path: "schedule", element: <Schedule /> },
          // 컨텐츠발행
          { path: "contents", element: <Contents /> },
          // 내 프로필
          { path: "profile", element: <MyProfile /> },
          // 내 프로필 제안하기
          { path: "proposal/profile", element: <ProposalProfile /> },
          // 제안하기(광고주)
          { path: "proposal/player", element: <PlayerProposal /> },
          // 제안현황
          { path: "proposal/now", element: <NowProposal /> },
          // 탐색(광고주)
          { path: "searching/player", element: <PlayerSearching /> },
        ],
      },
      // 회원가입
      { path: "signup", element: <SignUp /> },
      // 로그인
      { path: "login", element: <Login /> },
      // 프로필수정(프로필디테일페이지와 수정페이지의 합치는것도고려, 합치면 dashboard의 myprofile만)
      { path: "profile/update", element: <UpdateProfile /> },
    ],
  },
]);
root.render(<RouterProvider router={router}></RouterProvider>);
