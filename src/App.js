import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./App.css";
// import Hometest from './Component/Home/Hometest';
import Error404 from "./Component/Error404/Error404";
import Home from "./Component/Home/Home";
// import Profile from './Component/User/ProfileCHA/ProfileCON/Profile';
import ExPage from "./Component/ExamplePage/ExPage";
import Hacking from "./Component/Hacking/Hacking";
// import Slider from './Component/Home/Slider10/Slider10';
import ListMovieCategory from "./Component/ListMovie/ListMovieCategory";
// import Righter from './Component/Header&Footer/Righter/Righter';
import Donate from "./Component/Donate/Donate";
import Test from "./Component/Test/Test";
import UserAD from "./Component/Admin/UserAD/UserAD";
import ListMovieType from "./Component/ListMovie/ListMovieType";
import NewMovie from "./Component/ListMovie/NewMovie";
import MovieBox from "./Component/Detail/MovieBox";
import MovieDetail from "./Component/Detail/MovieDetail";
import Login from "./Component/User/Login/Login";
import VideoDetail from "./Component/Detail/VideoDetail";
import Test1 from "./Component/Test/Test1";
import Test2 from "./Component/Test/Test2";
import Test3 from "./Component/Test/Test3";
import Page2 from "./Component/User/ProfileCHA/Page2/Page2";
import ProfileCHA from "./Component/User/ProfileCHA/ProfileCHA";
import NewList from "./Component/Home/List1/NewList";
import SiderBar from "./Component/Admin/SiderBar/SiderBar";
import MovieAD from "./Component/Admin/MovieAD/MovieAD";
import EX from "./Component/ExamplePage/EX";
import Follow from "./Component/User/Follow/Follow";
import HotMovie from "./Component/ListMovie/HotMovie";
import ComingSoon from "./Component/ListMovie/ComingSoon";

function App() {
  return (
    <div className="App h-screen bg-[#253238]">
      <Router>
        <PayPalScriptProvider
          options={{ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID }}
        >
          <Routes>

            <Route path="/" element={<Test3 />} />      {/*KHÔNG DÙNG THÌ DẬP*/}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/Hometest" element={<Hometest />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/not-found" element={<Error404 />} />
            <Route path="/Profile" element={<ProfileCHA />} />
            {/* <Route path="/Profile" element={<Profile />} /> */}
            <Route path="/ExPage" element={<ExPage />} />
            <Route path="/EX" element={<EX />} />
            <Route path="/Hacking" element={<Hacking />} />
            {/* <Route path="/Slider" element={<Slider />} /> */}
            {/* <Route path="/Righter" element={<Righter />} /> */}
            {/* <Route path="/Slider1" element={<Righter />} /> */}
            <Route path="/Donate" element={<Donate />} />
            <Route path="/Follow" element={<Follow />} />
            <Route path="/Test1" element={<Test1 />} />
            <Route path="/Test2" element={<Test2 />} />
            <Route path="/Test3" element={<Test3 />} />
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/Test" element={<Test />} />
            <Route path="/AdminPage" element={<SiderBar />} />
            <Route path="/UserAD" element={<UserAD />} />
            <Route path="/phim-moi" element={<NewMovie />} />
            <Route path="/phim-moi/:page" element={<NewMovie />} />
            <Route path="/danh-muc/:category" element={<ListMovieCategory />} />
            <Route
              path="/danh-muc/:category/:page"
              element={<ListMovieCategory />}
            />
            <Route path="/the-loai/:type" element={<ListMovieType />} />
            <Route path="/the-loai/:type/:page" element={<ListMovieType />} />
            <Route path="/MovieBox/:movieid" element={<MovieBox />} />
            <Route path="/phim/:url" element={<MovieDetail />} />
            <Route path="/phim/:movieurl/:videourl" element={<VideoDetail />} />
            <Route path="/Admin/Movie" element={<MovieAD />} />
            <Route path="/NewList" element={<NewList />} />
            <Route path="/phim-noi-bat" element={<HotMovie />} />
            <Route path="/sap-chieu/:page" element={<ComingSoon />} />
            <Route path="/sap-chieu" element={<ComingSoon />} />
          </Routes>
        </PayPalScriptProvider>
      </Router>
    </div>
  );
}

export default App;
